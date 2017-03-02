import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import UserContainer from './UserContainer';

export default (
  <Router history={browserHistory}>
    { /* Note the ":" before "id". This denotes
         a dynamic URL segment and the value will
         be available in the "params" property of
         the rendered component. */ }
    <Route path="/users/:id" component={UserContainer} />
  </Router>
);
