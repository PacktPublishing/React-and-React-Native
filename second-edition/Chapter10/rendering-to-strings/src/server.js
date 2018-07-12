import React from 'react';

// The "renderToString()" function is like "render()",
// except it returns a rendered HTML string instead of
// manipulating the DOM.
import { renderToString } from 'react-dom/server';
import express from 'express';

// The component that we're going to render as a string.
import App from './App';

// The "doc()" function takes the rendered "content"
// of a React component and inserts it into an
// HTML document skeleton.
const doc = content =>
  `
  <!doctype html>
  <html>
    <head>
      <title>Rendering to strings</title>
    </head>
    <body>
      <div id="app">${content}</div>
    </body>
  </html>
  `;

const app = express();

// The root URL of the APP, returns the rendered
// React component.
app.get('/', (req, res) => {
  // Some properties to render...
  const props = {
    items: ['One', 'Two', 'Three']
  };

  // Render the "App" component using
  // "renderToString()"
  const rendered = renderToString(<App {...props} />);

  // Use the "doc()" function to build the final
  // HTML that is sent to the browser.
  res.send(doc(rendered));
});

app.listen(8080, () => {
  console.log('Listening on 127.0.0.1:8080');
});
