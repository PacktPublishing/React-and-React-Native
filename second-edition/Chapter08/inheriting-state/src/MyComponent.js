import React from 'react';
import BaseComponent from './BaseComponent';

// Extends "BaseComponent" to inherit the
// initial component state.
export default class MyComponent extends BaseComponent {
  // This is our chance to build on the initial state.
  // We change the "placeholder" text and mark it as
  // "enabled".
  componentDidMount() {
    this.data = this.data.merge({
      placeholder: 'Enter a name...',
      enabled: true
    });
  }

  // Used to set the name state whenever the input
  // value changes.
  onChange = ({ target: { value } }) => {
    this.data = this.data.set('name', value);
  };

  // Renders a simple input element, that uses the
  // state of this component as properties.
  render() {
    const { enabled, name, placeholder } = this.data.toJS();

    return (
      <label htmlFor="my-input">
        Name:
        <input
          type="text"
          id="my-input"
          disabled={!enabled}
          placeholder={placeholder}
          value={name}
          onChange={this.onChange}
        />
      </label>
    );
  }
}
