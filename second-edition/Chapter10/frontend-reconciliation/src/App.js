import React, { Component } from 'react';

export default class App extends Component {
  state = { clicks: 0 };

  render() {
    return (
      <section>
        <header>
          <h1>Hydrating The Client</h1>
        </header>
        <main>
          <p>Clicks {this.state.clicks}</p>
          <button
            onClick={() =>
              this.setState(state => ({ clicks: state.clicks + 1 }))
            }
          >
            Click Me
          </button>
        </main>
      </section>
    );
  }
}
