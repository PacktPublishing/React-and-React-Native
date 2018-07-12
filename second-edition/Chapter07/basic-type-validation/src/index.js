import React from 'react';
import { render as renderJSX } from 'react-dom';

import MyComponent from './MyComponent';

// The properties that we'll pass to the component.
// Each property is a different type, and corresponds
// to the "propTypes" spec of the component.
const validProps = {
  myString: 'My String',
  myNumber: 100,
  myBool: true,
  myFunc: () => 'My Return Value',
  myArray: ['One', 'Two', 'Three'],
  myObject: { myProp: 'My Prop' }
};

// These properties don't correspond to the "<MyComponent>"
// spec, and will cause warnings to be logged.
const invalidProps = {
  myString: 100,
  myNumber: 'My String',
  myBool: () => 'My Reaturn Value',
  myFunc: true,
  myArray: { myProp: 'My Prop' },
  myObject: ['One', 'Two', 'Three']
};

// Renders "<MyComponent>" with the given "props".
function render(props) {
  renderJSX(
    <MyComponent {...props} />,
    document.getElementById('root')
  );
}

render(validProps);
render(invalidProps);
