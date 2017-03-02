import React from 'react';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import express from 'express';

// We need the main "routes" module in the
// server...
import routes from './routes';

const doc = content =>
  `
  <!doctype html>
  <html>
    <head>
      <title>Backend Routing</title>
    </head>
    <body>
      <div id="app">${content}</div>
    </body>
  </html>
  `;

const app = express();

// Servers all paths, because the URL pattern matching
// is handled by react-router instead of Express.
app.get('/*', (req, res) => {
  // The "match()" function from react-router
  // will generate properties that we can pass
  // to "<RouterContext>". We can then use
  // "renderToString()" to generate our static
  // markup.
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
