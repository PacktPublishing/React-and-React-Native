import React from 'react';
import { Route, IndexRedirect } from 'react-router';

// The pages that make up feature "two".
import First from './First';
import Second from './Second';

// The routes of our feature. The "<IndexRedirect>"
// handles "/two" requests by redirecting to "/two/1".
export default (
  <Route path="/two">
    <IndexRedirect to="1" />
    <Route path="1" component={First} />
    <Route path="2" component={Second} />
  </Route>
);
