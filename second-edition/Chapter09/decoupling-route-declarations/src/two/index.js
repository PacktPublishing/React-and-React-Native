import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';

// The pages that make up feature "two".
import First from './First';
import Second from './Second';

// The routes of our feature. The "<Redirect>"
// handles "/two" requests by redirecting to "/two/1".
export default () => (
  <Fragment>
    <Route
      exact
      path="/two"
      render={() => <Redirect to="/two/1" />}
    />
    <Route exact path="/two/1" component={First} />
    <Route exact path="/two/2" component={Second} />
  </Fragment>
);
