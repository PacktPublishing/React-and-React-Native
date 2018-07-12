import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const WhatsAroundMe = () => (
  <View style={styles.container}>
    <MapView
      style={styles.mapView}
      showsUserLocation
      followUserLocation
    />
  </View>
);

AppRegistry.registerComponent(
  'WhatsAroundMe',
  () => WhatsAroundMe
);
