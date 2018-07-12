import React, { Component } from 'react';

export default class MyButton extends Component {
  // Renders a button element with an "onClick()" handler.
  // This function is declared inline with the JSX, and is
  // useful in scenarios where you need to call another
  // function.
  render() {
    return (
      <button onClick={e => console.log('clicked', e)}>
        {this.props.children}
      </button>
    );
  }
}
