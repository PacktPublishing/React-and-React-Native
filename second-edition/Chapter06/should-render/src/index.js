import React from 'react';
import { render as renderJSX } from 'react-dom';

import MyList from './MyList';

// Renders the "<MyList>" component. Then, it sets
// the state of the component by changing the value
// of the first "items" element. However, the value
// didn't actually change, so the same Immutable.js
// structure is reused. This means that
// "shouldComponentUpdate()" will return false.
function render() {
  const myList = renderJSX(
    <MyList />,
    document.getElementById('root')
  );

  // Not actually changing the value of the first
  // "items" element. So, Immutable.js recognizes
  // that nothing changed, and instead of
  // returning a new object, it returns the same
  // "myList.data" reference.
  myList.data = myList.data.setIn(['items', 0], 0);
}

// Instead of performing 500,000 DOM operations,
// "shouldComponentUpdate()" turns this into
// 5000 DOM operations.
for (let i = 0; i < 100; i++) {
  render();
}
