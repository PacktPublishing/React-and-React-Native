import React from 'react';
import { View, Button } from 'react-native';

import styles from './styles';

const Home = ({ navigation, screenProps: { stock } }) => (
  <View style={styles.container}>
    <Button
      title={`First Item (${stock.first})`}
      onPress={() =>
        navigation.navigate('Details', {
          id: 'first',
          title: 'First Item',
          content: 'First Item Content'
        })
      }
    />
    <Button
      title={`Second Item (${stock.second})`}
      onPress={() =>
        navigation.navigate('Details', {
          id: 'second',
          title: 'Second Item',
          content: 'Second Item Content'
        })
      }
    />
    <Button
      title={`Third Item (${stock.third})`}
      onPress={() =>
        navigation.navigate('Details', {
          id: 'third',
          title: 'Third Item',
          content: 'Third Item Content'
        })
      }
    />
  </View>
);

Home.navigationOptions = {
  title: 'Home'
};

export default Home;
