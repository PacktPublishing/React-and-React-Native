import React, { Component } from 'react';

// Renders a "<section>" element. The section has
// a heading element and this is followed by
// "this.props.children".
export default class MySection extends Component {
  render() {
    return (
      <section>
        <h2>My Section</h2>
        {this.props.children}
      </section>
    );
  }
}
