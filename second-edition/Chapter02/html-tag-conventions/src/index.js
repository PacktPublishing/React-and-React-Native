import React from 'react';
import { render } from 'react-dom';

// This renders as expected, except for the "foo"
// property, since this is not a recognized button
// property.
render(
  <button title="My Button" foo="bar">
    My Button
  </button>,
  document.getElementById('root')
);

// This fails with a "ReferenceError", because
// tag names are case-sensitive. This goes against
// the convention of using lower-case for HTML tag names.
render(<Button />, document.getElementById('root'));
