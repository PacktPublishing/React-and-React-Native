import React from 'react';

export default React.createClass({

  // This event handler requires access to the
  // component properties, but it doesn't need
  // to replicitly bind it's context, because
  // "createClass()" components do this automatically.
  onClick() {
    console.log('clicked',
      `"${this.props.children}"`);
  },

  // Renders a button with a bound event handler.
  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  },
});
