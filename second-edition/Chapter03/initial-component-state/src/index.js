import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

// "MyComponent" has an initial state, nothing is passed
// as a property when it's rendered.
render(<MyComponent />, document.getElementById('root'));
