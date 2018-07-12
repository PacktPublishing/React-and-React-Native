import React, { Component } from 'react';

// Renders a "<button>" element, using
// "this.props.children" as the text.
export default class MyButton extends Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}
