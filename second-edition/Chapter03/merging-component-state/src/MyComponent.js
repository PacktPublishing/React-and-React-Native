import React, { Component } from 'react';

export default class MyComponent extends Component {
  // The initial state...
  state = {
    first: 'loading...',
    second: 'loading...',
    third: 'loading...',
    fourth: 'loading...',
    doneMessage: 'finished!'
  };

  render() {
    const { state } = this;

    // Renders a list of items from the
    // component state.
    return (
      <ul>
        {Object.keys(state)
          .filter(key => key !== 'doneMessage')
          .map(key => (
            <li key={key}>
              <strong>{key}: </strong>
              {state[key]}
            </li>
          ))}
      </ul>
    );
  }
}
