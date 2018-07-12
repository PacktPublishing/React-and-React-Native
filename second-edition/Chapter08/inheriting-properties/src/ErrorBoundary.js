import { Component } from 'react';

// Uses the componentDidCatch() method to set the
// error state of this component. When rendering,
// if there's an error it gets logged and nothing
// is rendered.
export default class ErrorBoundary extends Component {
  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error === null) {
      return this.props.children;
    } else {
      console.error(this.state.error);
      return null;
    }
  }
}
