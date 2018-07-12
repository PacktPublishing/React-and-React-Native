import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

// Renders three "column" sections. The "container"
// view is styled so that it's children flow from
// the top of the screen, to the bottom of the screen.
export default () => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.boxText}>#1</Text>
    </View>
    <View style={styles.box}>
      <Text style={styles.boxText}>#2</Text>
    </View>
    <View style={styles.box}>
      <Text style={styles.boxText}>#3</Text>
    </View>
  </View>
);
