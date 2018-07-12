import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';
import first from './first';
import third from './third';

const Scene = () => (
  <View style={styles.container}>
    <Text style={styles.content}>
      Second Content
    </Text>
  </View>
);

const Title = () => (
  <Text style={styles.title}>Second</Text>
);

const LeftButton = ({ navigator }) => (
  <Text
    onPress={() => navigator.jumpTo(first)}
  >
    First
  </Text>
);

LeftButton.propTypes = {
  navigator: PropTypes.object.isRequired,
};

const RightButton = ({ navigator }) => (
  <Text
    onPress={() => navigator.jumpTo(third)}
  >
    Third
  </Text>
);

RightButton.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default {
  Scene,
  Title,
  LeftButton,
  RightButton,
};
