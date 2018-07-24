import React from 'react';
import {
  Text,
  ScrollView,
  ActivityIndicator,
  Switch,
  View
} from 'react-native';

import styles from './styles';

export default () => (
  <View style={styles.container}>
    {/* The "<ScrollView>" can wrap any
         other component to make it scrollable.
         Here, we're repeating an arbitrary group
         of components to create some scrollable
         content */}
    <ScrollView style={styles.scroll}>
      {new Array(6).fill(null).map((v, i) => (
        <View key={i}>
          {/* Abitrary "<Text>" component... */}
          <Text style={[styles.scrollItem, styles.text]}>
            Some text
          </Text>

          {/* Arbitrary "<ActivityIndicator>"... */}
          <ActivityIndicator style={styles.scrollItem} size="large" />

          {/* Arbitrary "<Switch>" component... */}
          <Switch style={styles.scrollItem} />
        </View>
      ))}
    </ScrollView>
  </View>
);
