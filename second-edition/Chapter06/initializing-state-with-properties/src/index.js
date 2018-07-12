import React from 'react';
import { render } from 'react-dom';

import UserListContainer from './UserListContainer';

// Renders the component with a "loading" property.
// This value ultimately ends up in the component state.
render(
  <UserListContainer loading="playing the waiting game..." />,
  document.getElementById('root')
);
