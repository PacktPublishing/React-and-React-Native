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

const doc = content =>
  `
  <!doctype html>
  <html>
    <head>
      <title>Frontend Reconciliation</title>
      <script src="/static/main-bundle.js" defer></script>
    </head>
    <body>
      <div id="app">${content}</div>
    </body>
  </html>
  `;

const app = express();

app.use(webpackDevMiddleware(webpack(config), {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(302, `${redirect.pathname}${redirect.search}`);
    } else if (props) {
      const rendered = renderToString((
        <RouterContext {...props} />
      ));

      res.send(doc(rendered));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

app.listen(8080, () => {
  console.log('Listening on 127.0.0.1:8080');
});
