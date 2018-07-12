import React, { Component } from 'react';

export default class MyInput extends Component {
  // Triggered when the value of the text input changes...
  onChange() {
    console.log('changed');
  }

  // Triggered when the text input loses focus...
  onBlur() {
    console.log('blured');
  }

  // JSX elements can have as many event handler
  // properties as necessary.
  render() {
    return <input onChange={this.onChange} onBlur={this.onBlur} />;
  }
}
