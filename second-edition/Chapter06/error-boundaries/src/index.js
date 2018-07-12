import React from 'react';
import { render } from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import UserListContainer from './UserListContainer';

// The <ErrorBoundary> component can wrap any component you need.
// You can also create different error boundary components that
// render errors differently.
render(
  <ErrorBoundary>
    <UserListContainer />
  </ErrorBoundary>,
  document.getElementById('root')
);
