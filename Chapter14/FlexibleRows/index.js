import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import styles from './styles';
import Box from './Box';

// Renders a single row with two boxes that stretch
// from top to bottom.
const FlexibleRows = () => (
  <View style={styles.container}>
    <Box>#1</Box>
    <Box>#2</Box>
  </View>
);

AppRegistry.registerComponent(
  'FlexibleRows',
  () => FlexibleRows
);
