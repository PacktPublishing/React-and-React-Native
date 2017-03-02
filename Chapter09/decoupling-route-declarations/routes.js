import React from 'react';
import {
  Router,
  browserHistory,
} from 'react-router';

// Import the routes from our features.
import oneRoutes from './one/routes';
import twoRoutes from './two/routes';

// The feature routes are rendered as children of
// the main router.
export default (
  <Router history={browserHistory}>
    {oneRoutes}
    {twoRoutes}
  </Router>
);
