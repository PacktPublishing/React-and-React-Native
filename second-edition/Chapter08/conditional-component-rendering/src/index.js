import React from 'react';
import { render } from 'react-dom';

import cond from './cond';
import MyComponent from './MyComponent';

// Two compositions of "MyComponent". The
// "ComposedVisible" verion will render
// because the predicate returns true. The
// "ComposedHidden" version doesn't render.
const ComposedVisible = cond(MyComponent, () => true);
const ComposedHidden = cond(MyComponent, () => false);

render(
  <section>
    <h1>Visible</h1>
    <ComposedVisible />
    <h2>Hidden</h2>
    <ComposedHidden />
  </section>,
  document.getElementById('root')
);
