import React from 'react';
import { render } from 'react-dom';

// Imports the "<Router>", and all the "<Route>"
// elements within.
import routes from './routes';

// The "<Router>" is the root element of the app.
render(
  routes,
  document.getElementById('app')
);
