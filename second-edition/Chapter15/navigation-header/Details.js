import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const Details = ({ navigation }) => (
  <View style={styles.container}>
    <Text>{navigation.getParam('content')}</Text>
  </View>
);

Details.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title'),
  headerRight: (
    <Button
      title="Buy"
      onPress={() => {}}
      disabled={navigation.getParam('stock') === 0}
    />
  )
});

export default Details;
