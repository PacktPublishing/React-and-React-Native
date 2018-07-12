import React from 'react';

// Exports an arrow function that returns a
// "<button>" element. This function is pure
// because it has no state, and will always
// produce the same output, given the same
// input.
export default ({ disabled, text }) => (
  <button disabled={disabled}>{text}</button>
);
