import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import ProgressBar from './ProgressBar';

const First = () => (
  <View style={styles.container}>
    <Text style={styles.content}>First Content</Text>
  </View>
);

First.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.progress}>
      <Text style={styles.title}>First</Text>
      <ProgressBar
        label={false}
        progress={navigation.state.params.progress(
          navigation.state.routeName
        )}
      />
    </View>
  ),
  headerLeft: (
    <Text
      onPress={() =>
        navigation.navigate('Fourth', navigation.state.params)
      }
    >
      Fourth
    </Text>
  ),
  headerRight: (
    <Text
      onPress={() =>
        navigation.navigate('Second', navigation.state.params)
      }
    >
      Second
    </Text>
  )
});

export default First;
