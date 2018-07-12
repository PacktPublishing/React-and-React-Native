import React, { Component } from 'react';

export default class MyButton extends Component {
  // Renders a "<button>" element using values
  // from "this.props".
  render() {
    const { disabled, text } = this.props;

    return <button disabled={disabled}>{text}</button>;
  }
}
