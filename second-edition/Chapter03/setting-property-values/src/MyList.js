import React, { Component } from 'react';

export default class MyList extends Component {
  render() {
    // The "items" property is an array.
    const { items } = this.props;

    // Maps each item in the array to a list item.
    return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
  }
}
