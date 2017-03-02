import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';
import second from './second';
import fourth from './fourth';

const Scene = () => (
  <View style={styles.container}>
    <Text style={styles.content}>
      First Content
    </Text>
  </View>
);

const Title = () => (
  <Text style={styles.title}>First</Text>
);

const LeftButton = ({ navigator }) => (
  <Text
    onPress={() => navigator.jumpTo(fourth)}
  >
    Fourth
  </Text>
);

LeftButton.propTypes = {
  navigator: PropTypes.object.isRequired,
};

const RightButton = ({ navigator }) => (
  <Text
    onPress={() => navigator.jumpTo(second)}
  >
    Second
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
