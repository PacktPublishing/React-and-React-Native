import React, { Component } from 'react';
import { View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Swipeable from './Swipeable';

export default class SwipableAndCancellable extends Component {
  // The initial state is an immutable list of
  // 8 swipable items.
  state = {
    data: fromJS(
      new Array(8)
        .fill(null)
        .map((v, id) => ({ id, name: 'Swipe Me' }))
    )
  };

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // The swipe handler passed to "<Swipeable>".
  // The swiped item is removed from the state.
  // This is a higher-order function that returns
  // the real handler so that the "id" context
  // can be set.
  onSwipe = id => () => {
    this.data = this.data.filterNot(v => v.get('id') === id);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.data
          .toJS()
          .map(i => (
            <Swipeable
              key={i.id}
              onSwipe={this.onSwipe(i.id)}
              name={i.name}
            />
          ))}
      </View>
    );
  }
}
