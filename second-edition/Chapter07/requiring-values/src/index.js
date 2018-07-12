import React from 'react';
import { render as renderJSX } from 'react-dom';

import MyComponent from './MyComponent';

const validProps = {
  myString: 'My String',
  myNumber: 100,
  myBool: true,
  myFunc: () => 'My Return Value',
  myArray: ['One', 'Two', 'Three'],
  myObject: { myProp: 'My Prop' }
};

// The same as "validProps", except it's missing
// the "myObject" property. This will trigger a
// warning.
const missingProp = {
  myString: 'My String',
  myNumber: 100,
  myBool: true,
  myFunc: () => 'My Return Value',
  myArray: ['One', 'Two', 'Three']
};

// Renders "<MyComponent>" with the given "props".
function render(props) {
  renderJSX(
    <MyComponent {...props} />,
    document.getElementById('root')
  );
}

render(validProps);
render(missingProp);
