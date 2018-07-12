import React, { Component } from 'react';

export default class MyComponent extends Component {
  // The initial state is set as a simple property
  // of the component instance.
  state = {
    first: false,
    second: true
  };

  render() {
    // Gets the "first" and "second" state properties
    // into constants, making our JSX less verbose.
    const { first, second } = this.state;

    // The returned JSX uses the "first" and "second"
    // state properties as the "disabled" property
    // value for their respective buttons.
    return (
      <main>
        <section>
          <button disabled={first}>First</button>
        </section>
        <section>
          <button disabled={second}>Second</button>
        </section>
      </main>
    );
  }
}
