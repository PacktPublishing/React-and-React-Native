import React, { Component } from 'react';

// A basic error boundary used to display error messages.
export default class ErrorBoundary extends Component {
  state = {
    error: null
  };

  // This lifecycle method is only called if a component
  // lower in the tree than this component throws an error.
  // You can handle the error however you like in this method,
  // including setting it as a state value so that it can be used
  // for rendering.
  componentDidCatch(error) {
    this.setState({ error });
  }

  // If there's no error, you can just render the boundary's
  // children as usual. If there's an error, you can render
  // the error message while ignoring the child components.
  render() {
    if (this.state.error === null) {
      return this.props.children;
    } else {
      return <strong>{this.state.error.toString()}</strong>;
    }
  }
}
