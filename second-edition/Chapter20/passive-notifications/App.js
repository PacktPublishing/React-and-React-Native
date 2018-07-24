import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Notification from './Notification'; // eslint-disable-line import/no-unresolved

export default class PassiveNotifications extends Component {
  // The initial state is the number of times
  // the counter button has been clicked, and
  // the notification message.
  state = {
    data: fromJS({
      count: 0,
      message: null
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

  render() {
    const { count, message } = this.data.toJS();

    return (
      <View style={styles.container}>
        {/* The "Notification" component is
             only displayed if the "message" state
             has something in it. */}
        <Notification message={message} />

        {/* Updates the count. Also needs to make
             sure that the "message" state is null,
             even if the message has been hidden
             already. */}
        <Text
          onPress={() => {
            this.data = this.data
              .update('count', c => c + 1)
              .set('message', null);
          }}
        >
          Pressed {count}
        </Text>

        {/* Displays the notification by
             setting the "message" state. */}
        <Text
          onPress={() => {
            this.data = this.data.set(
              'message',
              'Something happened!'
            );
          }}
        >
          Show Notification
        </Text>
      </View>
    );
  }
}
