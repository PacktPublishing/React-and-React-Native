import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const PlottingPoints = () => (
  <View style={styles.container}>
    <MapView
      style={styles.mapView}
      showsPointsOfInterest={false}
      showsUserLocation
      followUserLocation
    >
      <MapView.Marker
        title="Duff Brewery"
        description="Duff beer for me, Duff beer for you"
        coordinate={{
          latitude: 43.8418728,
          longitude: -79.086082,
        }}
      />
      <MapView.Marker
        title="Pawtucket Brewery"
        description="New! Patriot Light!"
        coordinate={{
          latitude: -79.086082,
          longitude: -79.085407,
        }}
      />
    </MapView>
  </View>
);

AppRegistry.registerComponent(
  'PlottingPoints',
  () => PlottingPoints
);
