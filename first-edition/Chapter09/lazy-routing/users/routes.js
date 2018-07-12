import React from 'react';

import UsersHeader from './UsersHeader';
import UsersContent from './UsersContent';

// The route configuration for our "users" feature.
export const users = {

  // The components redered by "App" are specified
  // here as "UsersHeader" and "UsersContent".
  path: 'users',
  components: {
    header: UsersHeader,
    content: UsersContent,
  },
  childRoutes: [

    // The "users/active" route lazily-loads the
    // "UsersActiveHeader" and "UsersActiveContent"
    // components when the route is activated.
    {
      path: 'active',
      getComponents(next, cb) {
        require.ensure([], (require) => {
          const {
            UsersActiveHeader,
          } = require('./UsersActiveHeader');

          const {
            UsersActiveContent,
          } = require('./UsersActiveContent');

          cb(null, {
            header: UsersActiveHeader,
            content: UsersActiveContent,
          });
        });
      },
    },

    // The "users/inactive" route lazily-loads the
    // "UsersInactiveHeader" and "UsersInactiveContent"
    // components when the route is activated.
    {
      path: 'inactive',
      getComponents(next, cb) {
        require.ensure([], (require) => {
          const {
            UsersInactiveHeader,
          } = require('./UsersInactiveHeader');

          const {
            UsersInactiveContent,
          } = require('./UsersInactiveContent');

          cb(null, {
            header: UsersInactiveHeader,
            content: UsersInactiveContent,
          });
        });
      },
    },
  ],
};

export default users;
