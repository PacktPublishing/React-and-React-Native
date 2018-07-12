import React from 'react';
import {
  AppRegistry,
  View,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

// Renders an "<ActivityIndicator>" component in the
// middle of the screen. It will animate on it's own
// while displayed.
const IndicatingProgress = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);

AppRegistry.registerComponent(
  'IndicatingProgress',
  () => IndicatingProgress
);
