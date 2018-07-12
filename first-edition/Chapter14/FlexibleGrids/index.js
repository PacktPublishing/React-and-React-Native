import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import styles from './styles';
import Box from './Box';

// An array of 10 numbers, representing the grid
// sections to render.
const boxes = new Array(10)
  .fill(null)
  .map((v, i) => i + 1);

const FlexibleGrids = () => (
  <View style={styles.container}>
    {/* Renders 10 "<Box>" sections */}
    {boxes.map(i => (
      <Box key={i}>#{i}</Box>
    ))}
  </View>
);

AppRegistry.registerComponent(
  'FlexibleGrids',
  () => FlexibleGrids
);
