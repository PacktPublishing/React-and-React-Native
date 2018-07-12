import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext('permissions');

export class PermissionProvider extends Component {
  state = {
    first: true,
    second: false,
    third: true
  };

  render() {
    return (
      <Provider value={this.state}>{this.props.children}</Provider>
    );
  }
}

const PermissionConsumer = ({ name, children }) => (
  <Consumer>{value => value[name] && children}</Consumer>
);

export { PermissionConsumer };
