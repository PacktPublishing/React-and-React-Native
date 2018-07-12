import React from 'react';
import { Text, View } from 'react-native';

// Imports the "styles" stylesheet from the
// "styles" module.
import styles from './styles';

// Renders a view with a square in the middle, and
// some text in the middle of that. The "style" property
// is passed a value from the "styles" stylesheet.
export default () => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.boxText}>I'm in a box</Text>
    </View>
  </View>
);
