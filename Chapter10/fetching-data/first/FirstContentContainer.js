import React, { Component } from 'react';

import store from '../store';
import FirstContent from './FirstContent';

class FirstContentContainer extends Component {
  // Static method that fetches data from an API
  // endpoint for instances of this component.
  static fetchData = () =>
    new Promise(
      resolve =>
        setTimeout(() => {
          resolve(['One', 'Two', 'Three']);
        }, 1000)
    ).then((result) => {
      // We have to make sure that the data is set properly
      // in the store before returning the promise.
      store.state = store.state
        .updateIn(
          ['firstContent', 'items'],
          items => items
            .clear()
            .push(...result)
        );

      return result;
    });

  // The default state of this component comes
  // from the "store".
  state = {
    data: store.state.get('firstContent'),
  }

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  componentDidMount() {
    // When the component mounts, we want to listen
    // changes in store state and re-render when
    // they happen.
    store.on('change', () => {
      this.data = store.state.get('firstContent');
    });

    const items = this.data.get('items');

    // If the state hasn't been fetched yet, fetch it.
    if (items.isEmpty()) {
      FirstContentContainer.fetchData();
    }
  }

  render() {
    return (
      <FirstContent {...this.data.toJS()} />
    );
  }
}

export default FirstContentContainer;
