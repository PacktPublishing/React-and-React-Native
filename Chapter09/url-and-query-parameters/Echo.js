import React from 'react';

// Simple component that expects either an "echo"
// URL segment parameter, or an "echo" query parameter.
export default ({
  params,
  location: {
    query,
  },
}) => (
  <h1>{params.echo || query.echo}</h1>
);
