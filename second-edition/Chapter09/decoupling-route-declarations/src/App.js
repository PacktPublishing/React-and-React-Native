import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// Import the routes from our features.
import One from './one';
import Two from './two';

// The feature routes are rendered as children of
// the main router.
export default () => (
  <Router>
    <Fragment>
      <Route exact path="/" render={() => <Redirect to="one" />} />
      <One />
      <Two />
    </Fragment>
  </Router>
);
