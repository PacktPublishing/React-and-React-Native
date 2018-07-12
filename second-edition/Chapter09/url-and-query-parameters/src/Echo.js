import React from 'react';
import { withRouter } from 'react-router';

// Simple component that expects either an "echo"
// URL segment parameter, or an "echo" query parameter.
export default withRouter(
  ({ match: { params }, location: { search } }) => (
    <h1>{params.msg || new URLSearchParams(search).get('msg')}</h1>
  )
);
