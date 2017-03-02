import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import styles from './styles';
import Box from './Box';

// Notice how the rendered JSX is much less verbose?
// The "<Box>" component encapsulates a lot of the
// extraneous style code.
const ImprovedThreeColumnLayout = () => (
  <View style={styles.container}>
    <Box>#1</Box>
    <Box>#2</Box>
    <Box>#3</Box>
  </View>
);

AppRegistry.registerComponent(
  'ImprovedThreeColumnLayout',
  () => ImprovedThreeColumnLayout
);
