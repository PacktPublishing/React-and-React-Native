import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const News = ({ navigation }) => (
  <View style={styles.container}>
    <Text>News Content</Text>
  </View>
);

News.navigationOptions = {
  title: 'News'
};

export default News;
