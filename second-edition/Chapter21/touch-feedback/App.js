import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Button from './Button';

export default () => (
  <View style={styles.container}>
    {/* Renders a "<Button>" that uses
         "TouchableOpacity" to handle user
         gestures, since that is the default */}
    <Button onPress={() => {}} label="Opacity" />

    {/* Renders a "<Button>" that uses
         "TouchableHighlight" to handle
         user gestures. */}
    <Button
      onPress={() => {}}
      label="Highlight"
      touchable="highlight"
    />
  </View>
);
