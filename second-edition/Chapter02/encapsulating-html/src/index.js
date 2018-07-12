// We also need "Component" so that we can
// extend it and make a new JSX tag.
import React, { Component } from 'react';
import { render } from 'react-dom';

// "MyComponent" extends "Compoennt", which means that
// we can now use it in JSX markup.
class MyComponent extends Component {
  render() {
    // All components have a "render()" method, which
    // retunrns some JSX markup. In this case, "MyComponent"
    // encapsulates a larger HTML structure.
    return (
      <section>
        <h1>My Component</h1>
        <p>Content in my component...</p>
      </section>
    );
  }
}

// Now when we render "<MyComponent>" tags, the encapsulated
// HTML structure is actually rendered. These are the
// building blocks of our UI.
render(<MyComponent />, document.getElementById('root'));
