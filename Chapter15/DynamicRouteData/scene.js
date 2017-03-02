import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

// The content rendered by the scene now comes from
// a property, since this is the only scene component
// in the whole app.
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

// The "title" value also comes from a prop.
const Title = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

Title.propTypes = {
  title: PropTypes.node.isRequired,
};

// The left button label and the route that's activated
// on press are passed in as properties.
const LeftButton = ({ navigator, route, content }) => (
  <Text onPress={() => navigator.replace(route)}>
    {content}
  </Text>
);

LeftButton.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
};

// The right button label and the route that's activated
// on press are passed in as properties.
const RightButton = ({ navigator, route, content }) => (
  <Text onPress={() => navigator.replace(route)}>
    {content}
  </Text>
);

RightButton.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
};

export default {
  Scene,
  Title,
  LeftButton,
  RightButton,
};
