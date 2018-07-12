import React from 'react';
import { View, Button } from 'react-native';

import styles from './styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      title="First Item"
      onPress={() =>
        navigation.navigate('Details', {
          title: 'First Item',
          content: 'First Item Content',
          stock: 1
        })
      }
    />
    <Button
      title="Second Item"
      onPress={() =>
        navigation.navigate('Details', {
          title: 'Second Item',
          content: 'Second Item Content',
          stock: 0
        })
      }
    />
    <Button
      title="Third Item"
      onPress={() =>
        navigation.navigate('Details', {
          title: 'Third Item',
          content: 'Third Item Content',
          stock: 200
        })
      }
    />
  </View>
);

Home.navigationOptions = {
  title: 'Home'
};

export default Home;
