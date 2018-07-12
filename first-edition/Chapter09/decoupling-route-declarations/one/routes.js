import React from 'react';
import { Route, IndexRedirect } from 'react-router';

// The pages that make up feature "one".
import First from './First';
import Second from './Second';

// The routes of our feature. The "<IndexRedirect>"
// handles "/one" requests by redirecting to "/one/1".
export default (
  <Route path="/one">
    <IndexRedirect to="1" />
    <Route path="1" component={First} />
    <Route path="2" component={Second} />
  </Route>
);
