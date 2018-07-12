import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

// The "App" component is rendered with every route.
import App from './App';

// The "User" components rendered with the "/users"
// route.
import UsersHeader from './users/UsersHeader';
import UsersMain from './users/UsersMain';

// The "Groups" components rendered with the "/groups"
// route.
import GroupsHeader from './groups/GroupsHeader';
import GroupsMain from './groups/GroupsMain';

// Configures the "/users" route. It has a path,
// and named components that are placed in "App".
const users = {
  path: 'users',
  components: {
    header: UsersHeader,
    main: UsersMain,
  },
};

// Configures the "/groups" route. It has a path,
// and named components that are placed in "App".
const groups = {
  path: 'groups',
  components: {
    header: GroupsHeader,
    main: GroupsMain,
  },
};

// Setup the router, using the "users" and "groups"
// route configurations.
export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route {...users} />
      <Route {...groups} />
    </Route>
  </Router>
);
