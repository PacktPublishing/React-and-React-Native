import React from 'react';
import { render } from 'react-dom';

import App from './App';

// Nothing special here. React sees the checksum on the
// root element, and determines that there's no need
// to render data yet.
render(<App />, document.getElementById('root'));
