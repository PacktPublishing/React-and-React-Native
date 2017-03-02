import React from 'react';
import { render } from 'react-dom';

import routes from './routes';

// Nothing special here. React sees the checksum on the
// root element, and determines that there's no need
// to render data yet.
render(
  routes,
  document.getElementById('app')
);
