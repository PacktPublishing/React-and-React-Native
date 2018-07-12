import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import UsersContainer from './UsersContainer';

export default (
  <Router history={browserHistory}>
    { /* The ":desc" parameter is optional, and so
         is the "/" that precedes it. The "()" syntax
         marks anything that's optional. */ }
    <Route path="/users(/:desc)" component={UsersContainer} />
  </Router>
);
