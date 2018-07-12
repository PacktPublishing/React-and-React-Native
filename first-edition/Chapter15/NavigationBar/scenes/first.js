import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';
import second from './second';
import third from './third';

// The "Scene" component only has to worry about
// rendering content now. In this case, some simple
// text and styles.
const Scene = () => (
  <View style={styles.container}>
    <Text style={styles.content}>
      First Content
    </Text>
  </View>
);

// The title component for the navigation bar...
const Title = () => (
  <Text style={styles.title}>First</Text>
);

// The left button for the navigation bar...
const LeftButton = ({ navigator }) => (
  <Text
    onPress={() => navigator.jumpTo(third)}
  >
    Third
  </Text>
);

LeftButton.propTypes = {
  navigator: PropTypes.object.isRequired,
};

// The right button for the navigation bar...
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

// The exported route now has components for the
// scene and for the navigation bar.
export default {
  Scene,
  Title,
  LeftButton,
  RightButton,
};
