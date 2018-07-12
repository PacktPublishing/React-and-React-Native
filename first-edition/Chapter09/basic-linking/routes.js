import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import App from './App';
import First from './First';
import Second from './Second';

// Simple child routes for "App"...
const routes = [
  {
    path: 'first',
    components: { content: First },
  },
  {
    path: 'second',
    components: { content: Second },
  },
];

export default (
  <Router history={browserHistory}>
    <Route
      path="/"
      component={App}
      childRoutes={routes}
    />
  </Router>
);
