import React from 'react';
import {
  Router,
  browserHistory,
} from 'react-router';

import App from './App';

// Defines the main application route as
// a plain object, instead of a "<Route>"
// component.
const routes = {
  // The "path" and "component" are specified,
  // just like any other route.
  path: '/',
  component: App,

  // This allows for lazy route configuration loading.
  // The "require.ensure()" call allows for tools like
  // Webpack to split the code bundules into separate
  // modules that are loaded on demand. The actual
  // "require()" calls get the route configurations.
  // In this case, it's routes for the "users" feature
  // and the "groups" feature.
  getChildRoutes(partialNextState, callback) {
    require.ensure([], (require) => {
      const { users } = require('./users/routes');
      const { groups } = require('./groups/routes');

      callback(null, [
        users,
        groups,
      ]);
    });
  },
};

// The "routes" object is passed to the "routes"
// property. There are no nested "<Route>" elements
// needed for this router.
export default (
  <Router history={browserHistory} routes={routes} />
);
