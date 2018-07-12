import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import styles from './styles';
import Box from './Box';

// Renders a single row with two boxes that stretch
// from top to bottom.
export default () => (
  <View style={styles.container}>
    <Box>#1</Box>
    <Box>#2</Box>
  </View>
);
