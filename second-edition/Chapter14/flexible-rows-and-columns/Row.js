import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

// Renders a "View" with the "row" style applied to
// it. It's "children" will flow from left to right.
const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
);

Row.propTypes = {
  children: PropTypes.node.isRequired
};

export default Row;
