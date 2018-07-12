import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Scene = ({ content }) => (
  <View style={styles.container}>
    <Text style={styles.content}>
      {content}
    </Text>
  </View>
);

Scene.propTypes = {
  content: PropTypes.node.isRequired,
};

const Title = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

Title.propTypes = {
  title: PropTypes.node.isRequired,
};

// The left button is the "back" button. Notice that we
// don't require a specific route here - we just use
// the "jumpBack()" method.
const LeftButton = ({ navigator, route, routes }) =>
  routes.indexOf(route) === 0 ? null : (
    <Text onPress={() => navigator.jumpBack()}>
      ◀
    </Text>
  );

LeftButton.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
};

// The right button is the "forward" button. Notice that
// we don't require a specific route here - we just use
// the "jumpForward()" method.
const RightButton = ({ navigator, route, routes }) =>
  routes.indexOf(route) === (routes.length - 1) ? null : (
    <Text onPress={() => navigator.jumpForward()}>
      ▶
    </Text>
  );

RightButton.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
};

export const route = {
  Scene,
  Title,
  LeftButton,
  RightButton,
};

export default route;
