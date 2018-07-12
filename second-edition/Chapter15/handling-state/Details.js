import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const Details = ({ navigation }) => (
  <View style={styles.container}>
    <Text>{navigation.getParam('content')}</Text>
  </View>
);

Details.navigationOptions = ({
  navigation,
  screenProps: { stock, updateStock }
}) => {
  const id = navigation.getParam('id');
  const title = navigation.getParam('title');

  return {
    title,
    headerRight: (
      <Button
        title="Buy"
        onPress={() => updateStock(id)}
        disabled={stock[id] === 0}
      />
    )
  };
};

export default Details;
