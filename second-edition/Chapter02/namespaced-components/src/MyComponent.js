import React, { Component } from 'react';

// The "First" component, renders some basic JSX...
class First extends Component {
  render() {
    return <p>First...</p>;
  }
}

// The "Second" component, renders some basic JSX...
class Second extends Component {
  render() {
    return <p>Second...</p>;
  }
}

// The "MyComponent" component renders it's children
// in a "<section>" element.
class MyComponent extends Component {
  render() {
    return <section>{this.props.children}</section>;
  }
}

// Here is where we "namespace" the "First" and
// "Second" components, by assigning them to
// "MyComponent" as class properties. This is how
// other modules can render them as "<MyComponent.First>"
// elements.
MyComponent.First = First;
MyComponent.Second = Second;

export default MyComponent;

// This isn't actually necessary. If we want to be able
// to use the "First" and "Second" components independent
// of "MyComponent", we would leave this in. Otherwise,
// we would only export "MyComponent".
export { First, Second };
