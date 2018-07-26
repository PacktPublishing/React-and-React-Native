import React, { Component } from 'react';
import { Text, View, NetInfo } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';

// Maps the state returned from "NetInfo" to
// a string that we want to display in the UI.
const connectedMap = {
  none: 'Disconnected',
  unknown: 'Disconnected',
  wifi: 'Connected',
  cell: 'Connected',
  mobile: 'Connected'
};

export default class NetworkState extends Component {
  // The "connected" state is a simple
  // string that stores the state of the
  // network.
  state = {
    data: fromJS({
      connected: ''
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

  // When the network state changes, use the
  // "connectedMap" to find the string to display.
  onNetworkChange = connection => {
    this.data = this.data.set(
      'connected',
      connectedMap[connection.type]
    );
  };

  // When the component is mounted, we add a listener
  // that changes the "connected" state when the
  // network state changes.
  componentDidMount() {
    NetInfo.addEventListener(
      'connectionChange',
      this.onNetworkChange
    );
  }

  // Make sure the listener is removed...
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.onNetworkChange
    );
  }

  // Simply renders the "connected" state as
  // it changes.
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.data.get('connected')}</Text>
      </View>
    );
  }
}
