import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);
