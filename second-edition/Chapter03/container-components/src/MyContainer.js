import React, { Component } from 'react';

import MyList from './MyList';

// Utility function that's intended to mock
// a service that this component uses to
// fetch it's data. It returns a promise, just
// like a real async API call would. In this case,
// the data is resolved after a 2 second delay.
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['First', 'Second', 'Third']);
    }, 2000);
  });
}

// Container components usually have state, so they
// can't be declared as functions.
export default class MyContainer extends Component {
  // The container should always have an initial state,
  // since this will be passed down to child components
  // as properties.
  state = { items: [] };

  // After the component has been rendered, make the
  // call to fetch the component data, and change the
  // state when the data arrives.
  componentDidMount() {
    fetchData().then(items => this.setState({ items }));
  }

  // Renders the containee, passing the container
  // state as properties, using the spread operator: "...".
  render() {
    return <MyList {...this.state} />;
  }
}
