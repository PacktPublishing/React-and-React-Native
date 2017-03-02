import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';

import App from './App';
import Home from './Home';
import Forms from './forms/Forms';
import Lists from './lists/Lists';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="forms" component={Forms} />
      <Route path="lists" component={Lists} />
    </Route>
  </Router>
);
