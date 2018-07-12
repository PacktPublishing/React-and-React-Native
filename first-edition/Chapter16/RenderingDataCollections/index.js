import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView,
} from 'react-native';

import styles from './styles';

// You always need a comparator function that's
// used to determine whether or not a row has
// changed. Even in simple cases like this, where
// strict inequality is used.
const rowHasChanged = (r1, r2) => r1 !== r2;

const source = new ListView
  // A data source for the list. It's eventually passed
  // to the "<ListView>" component, and it requires a
  // "rowHasChanged()" comparator.
  .DataSource({ rowHasChanged })

  // Returns a clone of the data source with new data.
  // The comparator function is used by the "<ListView>"
  // component to determine what has changed.
  .cloneWithRows(
    new Array(100)
      .fill(null)
      .map((v, i) => `Item ${i}`)
  );

const RenderingDataCollections = () => (
  <View style={styles.container}>
    { /* Renders the list by providing a "dataSource"
         property and a "renderRow" function which
         renders each item in the list. */ }
    <ListView
      dataSource={source}
      renderRow={
        i => (<Text style={styles.item}>{i}</Text>)
      }
    />
  </View>
);

AppRegistry.registerComponent(
  'RenderingDataCollections',
  () => RenderingDataCollections
);
