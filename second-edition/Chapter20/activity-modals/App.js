import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Activity from './Activity';

export default class ActivityModals extends Component {
  // The state is a "fetching" boolean value,
  // and a "promise" that is used to determine
  // when the fetching is done.
  state = {
    data: fromJS({
      fetching: false,
      promise: Promise.resolve()
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

  // When the fetch button is pressed, the
  // promise that simulates async activity
  // is set, along with the "fetching" state.
  // When the promise resolves, the "fetching"
  // state goes back to false, hiding the modal.
  onPress = () => {
    this.data = this.data.merge({
      promise: new Promise(resolve => setTimeout(resolve, 3000)).then(
        () => {
          this.data = this.data.set('fetching', false);
        }
      ),
      fetching: true
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* The "<Activity>" modal is only visible
             when the "fetching" state is true. */}
        <Activity visible={this.data.get('fetching')} />
        <Text onPress={this.onPress}>Fetch Stuff...</Text>
      </View>
    );
  }
}
