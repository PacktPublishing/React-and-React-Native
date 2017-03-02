import React from 'react';

import GroupsHeader from './GroupsHeader';
import GroupsContent from './GroupsContent';

export const groups = {

  // The components redered by "App" are specified
  // here as "UsersHeader" and "UsersContent".
  path: 'groups',
  components: {
    header: GroupsHeader,
    content: GroupsContent,
  },
  childRoutes: [

    // The "groups/active" route lazily-loads the
    // "GroupsActiveHeader" and "GroupsActiveContent"
    // components when the route is activated.
    {
      path: 'active',
      getComponents(next, cb) {
        require.ensure([], (require) => {
          const {
            GroupsActiveHeader,
          } = require('./GroupsActiveHeader');

          const {
            GroupsActiveContent,
          } = require('./GroupsActiveContent');

          cb(null, {
            header: GroupsActiveHeader,
            content: GroupsActiveContent,
          });
        });
      },
    },

    // The "groups/inactive" route lazily-loads the
    // "GroupsInactiveHeader" and "GroupsInactiveContent"
    // components when the route is activated.
    {
      path: 'inactive',
      getComponents(next, cb) {
        require.ensure([], (require) => {
          const {
            GroupsInactiveHeader,
          } = require('./GroupsInactiveHeader');

          const {
            GroupsInactiveContent,
          } = require('./GroupsInactiveContent');

          cb(null, {
            header: GroupsInactiveHeader,
            content: GroupsInactiveContent,
          });
        });
      },
    },
  ],
};

export default groups;
