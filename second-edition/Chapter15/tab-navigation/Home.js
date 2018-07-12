import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home Content</Text>
  </View>
);

Home.navigationOptions = {
  title: 'Home'
};

export default Home;
