import React, { Component } from 'react';
import { fromJS } from 'immutable';

export default class MyList extends Component {
  state = {
    data: fromJS({
      items: new Array(5000).fill(null).map((v, i) => i)
    })
  };

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // If this method returns false, the component
  // will not render. Since we're using an Immutable.js
  // data structure, we simply need to check for equality.
  // If "state.data" is the same, then there's no need to
  // render because nothing has changed since the last render.
  shouldComponentUpdate(props, state) {
    return this.data !== state.data;
  }

  // Renders the complete list of items, even if it's huge.
  render() {
    const items = this.data.get('items');

    return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
  }
}
