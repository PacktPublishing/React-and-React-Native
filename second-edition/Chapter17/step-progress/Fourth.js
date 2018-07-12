import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import ProgressBar from './ProgressBar';

const Fourth = () => (
  <View style={styles.container}>
    <Text style={styles.content}>Fourth Content</Text>
  </View>
);

Fourth.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.progress}>
      <Text style={styles.title}>Fourth</Text>
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
        navigation.navigate('Third', navigation.state.params)
      }
    >
      Third
    </Text>
  ),
  headerRight: (
    <Text
      onPress={() =>
        navigation.navigate('First', navigation.state.params)
      }
    >
      First
    </Text>
  )
});

export default Fourth;
