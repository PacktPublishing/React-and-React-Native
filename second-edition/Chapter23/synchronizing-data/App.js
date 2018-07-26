import React, { Component } from 'react';
import { Text, View, Switch, NetInfo } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import { set, get } from './store';

// Used to provide consistent boolean values
// for actual booleans and their string representations.
const boolMap = {
  true: true,
  false: false
};

export default class SynchronizingData extends Component {
  // The message state is used to indicate that
  // the user has gone offline. The other state
  // items are things that the user wants to change
  // and sync.
  state = {
    data: fromJS({
      message: null,
      first: false,
      second: false,
      third: false
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

  // Generates a handler function bound to a given key.
  save = key => value => {
    // Calls "set()" and depending on the resolved value,
    // sets the user message.
    set(key, value).then(
      connected => {
        this.data = this.data
          .set('message', connected ? null : 'Saved Offline')
          .set(key, value);
      },
      err => {
        this.data = this.data.set('message', err);
      }
    );
  };

  componentDidMount() {
    // We have to call "NetInfo.fetch()" before
    // calling "get()" to ensure that the
    // connection state is accurate. This will
    // get the initial state of each item.
    NetInfo.getConnectionInfo().then(() =>
      get().then(
        items => {
          this.data = this.data.merge(items);
        },
        err => {
          this.data = this.data.set('message', err);
        }
      )
    );
  }

  render() {
    // Bound methods...
    const { save } = this;

    // State...
    const { message, first, second, third } = this.data.toJS();

    return (
      <View style={styles.container}>
        <Text>{message}</Text>
        <View>
          <Text>First</Text>
          <Switch
            value={boolMap[first.toString()]}
            onValueChange={save('first')}
          />
        </View>
        <View>
          <Text>Second</Text>
          <Switch
            value={boolMap[second.toString()]}
            onValueChange={save('second')}
          />
        </View>
        <View>
          <Text>Third</Text>
          <Switch
            value={boolMap[third.toString()]}
            onValueChange={save('third')}
          />
        </View>
      </View>
    );
  }
}
