import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UsersContainer from './UsersContainer';

export default (
  <Router>
    {/* The ":desc" parameter is optional, and so
         is the "/" that precedes it. The "()" syntax
         marks anything that's optional. */}
    <Route path="/users(/:desc)" component={UsersContainer} />
  </Router>
);
