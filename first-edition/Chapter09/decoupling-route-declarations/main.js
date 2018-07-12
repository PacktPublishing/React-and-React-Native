import React from 'react';
import { render } from 'react-dom';

import routes from './routes';

// Renders the main router, including the
// feature routes.
render(
  routes,
  document.getElementById('app')
);
