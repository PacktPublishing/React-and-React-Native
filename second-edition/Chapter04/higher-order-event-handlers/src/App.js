import React, { Fragment, Component } from 'react';

export default class App extends Component {
  state = {
    first: 0,
    second: 0,
    third: 0
  };

  // This function is defined as an arrow function, so "this" is
  // lexically-bound to this component. The name argument is used
  // by the function that's returned as the event handler in the
  // computed property name.
  onClick = name => () => {
    this.setState(state => ({
      ...state,
      [name]: state[name] + 1
    }));
  };

  render() {
    const { first, second, third } = this.state;

    return (
      <Fragment>
        {/* By calling this.onClick() and supplying an argument value,
            you're creating a new event handler function on the fly. */}
        <button onClick={this.onClick('first')}>First {first}</button>
        <button onClick={this.onClick('second')}>
          Second {second}
        </button>
        <button onClick={this.onClick('third')}>Third {third}</button>
      </Fragment>
    );
  }
}
