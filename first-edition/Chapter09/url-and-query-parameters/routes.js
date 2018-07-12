import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import App from './App';
import Echo from './Echo';

// Renders the "<App>" and "<Echo>" components...
export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route
        path="echo(/:echo)"
        components={{ content: Echo }}
      />
    </Route>
  </Router>
);
