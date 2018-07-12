import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Settings = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Settings Content</Text>
  </View>
);

Settings.navigationOptions = {
  title: 'Settings'
};

export default Settings;
