// The "render()" function will render JSX markup and
// place the resulting content into a DOM node. The "React"
// object isn't explicitly used here, but it's used
// by the transpiled JSX source.
import React from 'react';
import { render } from 'react-dom';

// Renders the JSX markup. Notice the XML syntax
// mixed with JavaScript? This is replaced by the
// transpiler before it reaches the browser.
render(
  <p>
    Hello, <strong>JSX</strong>
  </p>,
  document.getElementById('root')
);
