import React, { Component } from 'react';

export default class MyButton extends Component {
  // The "defaultProps" values are used when the
  // same property isn't passed to the JSX element.
  static defaultProps = {
    disabled: false,
    text: 'My Button'
  };

  render() {
    // Get the property values we want to render.
    // In this case, it's the "defaultProps", since
    // nothing is passed in the JSX.
    const { disabled, text } = this.props; // eslint-disable-line react/prop-types

    return <button disabled={disabled}>{text}</button>;
  }
}
