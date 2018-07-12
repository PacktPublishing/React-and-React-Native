import React from 'react';

// A stateless component that expects
// an "items" property so that it can render
// a "<ul>" element.
export default ({ items }) => (
  <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
);
