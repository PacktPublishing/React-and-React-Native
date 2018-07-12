import React, { Component } from 'react';

// Mock function, meant to simulate fetching
// data asynchronously from an API.
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default class MyButton extends Component {
  onClick(e) {
    // This works fine, we can access the DOM element
    // through the "currentTarget" property.
    console.log('clicked', e.currentTarget.style);

    fetchData().then(() => {
      // However, trying to access "currentTarget"
      // asynchronously fails, because it's properties
      // have all been nullified so that the instance
      // can be reused.
      console.log('callback', e.currentTarget.style);
    });
  }

  render() {
    return (
      <button onClick={this.onClick}>{this.props.children}</button>
    );
  }
}
