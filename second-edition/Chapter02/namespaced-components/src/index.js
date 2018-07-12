import React from 'react';
import { render } from 'react-dom';

// We only need to import "MyComponent" since
// the "First" and "Second" components are part
// of this "namespace".
import MyComponent from './MyComponent';

// Now we can render "MyComponent" elements,
// and it's "namespaced" elements as children.
// We don't actually have to use the namespaced
// syntax here, we could import the "First" and
// "Second" components and render them without the
// "namespace" syntax. It's a matter of readability
// and personal taste.
render(
  <MyComponent>
    <MyComponent.First />
    <MyComponent.Second />
  </MyComponent>,
  document.getElementById('root')
);
