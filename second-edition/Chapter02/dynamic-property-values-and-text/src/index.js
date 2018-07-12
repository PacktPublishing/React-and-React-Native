import React from 'react';
import { render } from 'react-dom';

// These constants are passed into the JSX
// markup using the JavaScript expression syntax.
const enabled = false;
const text = 'A Button';
const placeholder = 'input value...';
const size = 50;

// We're rendering a "<button>" and an "<input>"
// element, both of which use the "{}" JavaScript
// expression syntax to fill in property, and text
// values.
render(
  <section>
    <button disabled={!enabled}>{text}</button>
    <input placeholder={placeholder} size={size} />
  </section>,
  document.getElementById('root')
);
