import React from 'react';
import { render } from 'react-dom';

import MyContainer from './MyContainer';

// All we have to do is render the "MyContainer"
// component, since it looks after providing props
// for it's children.
render(<MyContainer />, document.getElementById('root'));
