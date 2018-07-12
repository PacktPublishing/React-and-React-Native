import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Switch from './Switch';

class TogglingOnAndOff extends Component {
  state = {
    data: fromJS({
      first: false,
      second: false,
    }),
  }

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  render() {
    const {
      first,
      second,
    } = this.state.data.toJS();

    return (
      <View style={styles.container}>
        { /* When this switch is turned on, the
             second switch is disabled. */ }
        <Switch
          label="Disable Next Switch"
          value={first}
          disabled={second}
          onValueChange={(v) => {
            this.data = this.data.set('first', v);
          }}
        />

        { /* When this switch is turned on, the
             first switch is disabled. */ }
        <Switch
          label="Disable Previous Switch"
          value={second}
          disabled={first}
          onValueChange={(v) => {
            this.data = this.data.set('second', v);
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent(
  'TogglingOnAndOff',
  () => TogglingOnAndOff
);
