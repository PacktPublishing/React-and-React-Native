import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

// This component is an abstraction for rendering
// text inside of a box with border and background
// styles. It makes other components less verbose
// and easier to read.
const Box = ({ children }) => (
  <View style={styles.box}>
    <Text style={styles.boxText}>{children}</Text>
  </View>
);

Box.propTypes = {
  children: PropTypes.node.isRequired
};

export default Box;
