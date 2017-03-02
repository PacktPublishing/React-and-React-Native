import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Box = ({ children }) => (
  <View style={styles.box}>
    <Text style={styles.boxText}>
      {children}
    </Text>
  </View>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
