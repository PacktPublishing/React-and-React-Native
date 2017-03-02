import React from 'react';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';

// We need the main "routes" module in the
// server...
import routes from './routes';
import * as config from './webpack.config.js';
import store from './store';

// In adition to the rendered component "content",
// this function now accepts the initial "state".
// This is set on "window.INITIAL_STATE" so that
// React can determine when the first change after
// the initial render happens.
const doc = (content, state) =>
  `
  <!doctype html>
  <html>
    <head>
      <title>Fetching Data</title>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(state)};
      </script>
      <script src="/static/main-bundle.js" defer></script>
    </head>
    <body>
      <div id="app">${content}</div>
    </body>
  </html>
  `;

// Given a list of conponents returned from react-router
// "match()", find their data dependencies and return a
// promise that's resolved when all component data has
// been fetched.
const fetchComponentData = components =>
  Promise.all(
    components
      .reduce((result, i) => {
        // If the component is an object, it's
        // the "components" property of a route. In this
        // example, it's the "header" and "content"
        // components. So, we need to iterate over the
        // the object values to see if any of the components
        // has a "fetchData()" method.
        if (typeof i === 'object') {
          for (const k of Object.keys(i)) {
            if (i[k].hasOwnProperty('fetchData')) {
              result.push(i[k]);
            }
          }
        // Otherwise, we assume that the item is a component,
        // and simply check if it has a "fetchData()" method.
        } else if (i && i.fetchData) {
          result.push(i);
        }
        return result;
      }, [])
      // Call "fetchData()" on all the components, mapping
      // the promises to "Promise.all()".
      .map(i => i.fetchData())
  );

const app = express();

app.use(webpackDevMiddleware(webpack(config), {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/*', (req, res) => {
  match({
    routes,
    location: req.url,
  }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(
        302,
        `${redirect.pathname}${redirect.search}`
      );
    } else if (props) {
      // If a route match is found, we pass "props.components"
      // to "fetchComponentData()". Only when this resolves
      // do we render the components because we know the store
      // has all the necessary compnent data now.
      fetchComponentData(props.components).then(() => {
        const rendered = renderToString((
          <RouterContext {...props} />
        ));

        res.send(doc(rendered, store.state.toJS()));
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(8080, () => {
  console.log('Listening on 127.0.0.1:8080');
});
