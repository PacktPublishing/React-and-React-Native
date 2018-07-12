import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import loading from './loading';

const Third = loading(({ navigation }) => (
  <View style={styles.container}>
    <Text
      style={styles.item}
      onPress={() => navigation.navigate('First')}
    >
      First
    </Text>
    <Text
      style={styles.item}
      onPress={() => navigation.navigate('Second')}
    >
      Second
    </Text>
  </View>
));

export default Third;
