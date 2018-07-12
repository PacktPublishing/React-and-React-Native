import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';
import loading from '../loading';
import first from './first';
import third from './third';

const Second = ({ navigator }) => (
  <View style={styles.container}>
    <Text
      style={styles.item}
      onPress={() => navigator.replace(first)}
    >
      First
    </Text>
    <Text
      style={styles.item}
      onPress={() => navigator.replace(third)}
    >
      Third
    </Text>
  </View>
);

Second.propTypes = {
  navigator: PropTypes.object.isRequired,
};

const fetchData = () => new Promise(
  resolve => setTimeout(resolve, 1000)
);

export default {
  Scene: loading(Second),
  fetchData,
};
