import React from 'react';
import { render } from 'react-dom';

import { PermissionProvider } from './PermissionContext';
import App from './App';

render(
  <PermissionProvider>
    <App />
  </PermissionProvider>,
  document.getElementById('root')
);
