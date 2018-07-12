import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

// Renders an "<ActivityIndicator>" component in the
// middle of the screen. It will animate on it's own
// while displayed.
export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);
