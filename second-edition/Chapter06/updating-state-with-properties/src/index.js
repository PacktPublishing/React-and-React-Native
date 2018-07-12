import React from 'react';
import { render as renderJSX } from 'react-dom';

import MyFeature from './MyFeature';

// Determines the state of the button
// element in "MyFeature".
let disabled = true;

function render() {
  // Toggle the state of the "disabled" property.
  disabled = !disabled;

  renderJSX(
    <MyFeature {...{ disabled }} />,
    document.getElementById('root')
  );
}

// Re-render the "<MyFeature>" component every
// 3 seconds, toggling the "disabled" button
// property.
setInterval(render, 3000);

render();
