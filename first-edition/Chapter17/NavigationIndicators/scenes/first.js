import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';
import loading from '../loading';
import second from './second';
import third from './third';

// Renders links to other scenes...
const First = ({ navigator }) => (
  <View style={styles.container}>
    <Text
      style={styles.item}
      onPress={() => navigator.replace(second)}
    >
      Second
    </Text>
    <Text
      style={styles.item}
      onPress={() => navigator.replace(third)}
    >
      Third
    </Text>
  </View>
);

First.propTypes = {
  navigator: PropTypes.object.isRequired,
};

// Simulates a real "fetch()" call by returning a promise
// that's resolved aftter 1 second.
const fetchData = () => new Promise(
  resolve => setTimeout(resolve, 1000)
);

// The exported "Scene" component is composed with
// higher-order "loading()" function.
export default {
  Scene: loading(First),
  fetchData,
};
