import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

// Exports a React Native component that
// renders a "<View>" with the "box" style
// and a "<Text>" component with the "boxText"
// style.
const Box = ({ children }) => (
  <View style={styles.box}>
    <Text style={styles.boxText}>{children}</Text>
  </View>
);

Box.propTypes = {
  children: PropTypes.node.isRequired
};

export default Box;
