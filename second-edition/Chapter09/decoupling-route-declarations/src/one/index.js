import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';

// The pages that make up feature "one".
import First from './First';
import Second from './Second';

// The routes of our feature. The "<Redirect>"
// handles "/one" requests by redirecting to "/one/1".
export default () => (
  <Fragment>
    <Route
      exact
      path="/one"
      render={() => <Redirect to="/one/1" />}
    />
    <Route exact path="/one/1" component={First} />
    <Route exact path="/one/2" component={Second} />
  </Fragment>
);
