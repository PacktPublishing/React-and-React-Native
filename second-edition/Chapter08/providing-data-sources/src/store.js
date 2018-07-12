import React, { Component } from 'react';
import { fromJS } from 'immutable';

// The components that are connected to this store.
let components = fromJS([]);

// The state store itself, where application data is kept.
let store = fromJS({});

// Sets the state of the store, then sets the
// state of every connected component.
export function setState(state) {
  store = state;

  for (const component of components) {
    component.setState({
      data: store
    });
  }
}

// Returns the state of the store.
export function getState() {
  return store;
}

// Returns a higher-order component that's connected
// to the "store".
export function connect(ComposedComponent) {
  return class ConnectedComponent extends Component {
    state = { data: store };

    // When the component is mounted, add it to "components",
    // so that it will receive updates when the store state
    // changes.
    componentDidMount() {
      components = components.push(this);
    }

    // Deletes this component from "components" when it is
    // unmounted from the DOM.
    componentWillUnmount() {
      const index = components.findIndex(this);
      components = components.delete(index);
    }

    // Renders "ComposedComponent", using the "store" state
    // as properties.
    render() {
      return <ComposedComponent {...this.state.data.toJS()} />;
    }
  };
}
