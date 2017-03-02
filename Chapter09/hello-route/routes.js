import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import MyComponent from './MyComponent';

// Exports a "<Router>" component to be rendered.
export default (
  <Router history={browserHistory}>
    <Route path="/" component={MyComponent} />
  </Router>
);
