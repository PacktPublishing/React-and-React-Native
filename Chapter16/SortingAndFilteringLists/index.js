import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import styles from './styles';
import ListContainer from './ListContainer';

const SortingAndFilteringLists = () => (
  <View style={styles.container}>
    <ListContainer />
  </View>
);

AppRegistry.registerComponent(
  'SortingAndFilteringLists',
  () => SortingAndFilteringLists
);
