import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import ProgressBar from './ProgressBar';

const Third = () => (
  <View style={styles.container}>
    <Text style={styles.content}>Third Content</Text>
  </View>
);

Third.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.progress}>
      <Text style={styles.title}>Third</Text>
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
        navigation.navigate('Second', navigation.state.params)
      }
    >
      Second
    </Text>
  ),
  headerRight: (
    <Text
      onPress={() =>
        navigation.navigate('Fourth', navigation.state.params)
      }
    >
      Fourth
    </Text>
  )
});

export default Third;
