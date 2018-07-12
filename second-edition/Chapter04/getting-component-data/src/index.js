import React from 'react';
import { render } from 'react-dom';

import MyList from './MyList';

// The items to pass to "<MyList>" as a property.
const items = [
  { id: 0, name: 'First' },
  { id: 1, name: 'Second' },
  { id: 2, name: 'Third' }
];

// Renders "<MyList>" with an "items" property.
render(<MyList items={items} />, document.getElementById('root'));
