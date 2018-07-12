import React, { Component } from 'react';

export default class MyComponent extends Component {
  // The initial state...
  state = {
    first: 'loading...',
    second: 'loading...',
    third: 'loading...',
  }

  render() {
    const { state } = this;

    // Renders a list of items from the
    // component state.
    return (
      <ul>
        {Object.keys(state).map(i => (
          <li key={i}>
            <strong>{i}: </strong>{state[i]}
          </li>
        ))}
      </ul>
    );
  }
}
