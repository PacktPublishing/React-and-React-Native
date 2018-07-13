import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { fromJS } from 'immutable';

import styles from './styles';

// The "IPA" region coordinates and color...
const ipaRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0695283 },
    { latitude: 43.8537168, longitude: -79.0700046 },
    { latitude: 43.8518394, longitude: -79.0725697 },
    { latitude: 43.8481651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0695283 }
  ],
  strokeColor: 'coral',
  strokeWidth: 4
};

// The "stout" region coordinates and color...
const stoutRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0693283 },
    { latitude: 43.8517168, longitude: -79.0710046 },
    { latitude: 43.8518394, longitude: -79.0715697 },
    { latitude: 43.8491651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0693283 }
  ],
  strokeColor: 'firebrick',
  strokeWidth: 4
};

export default class PlottingOverlays extends Component {
  // The "IPA" region is rendered first. So the "ipaStyles"
  // list has "boldText" in it, to show it as selected. The
  // "overlays" list has the "ipaRegion" in it.
  state = {
    data: fromJS({
      ipaStyles: [styles.ipaText, styles.boldText],
      stoutStyles: [styles.stoutText],
      overlays: [ipaRegion]
    })
  };

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // The "IPA" text was clicked...
  onClickIpa = () => {
    this.data = this.data
      // Makes the IPA text bold...
      .update('ipaStyles', i => i.push(styles.boldText))
      // Removes the bold from the stout text...
      .update('stoutStyles', i => i.pop())
      // Replaces the stout overlay with the IPA overlay...
      .update('overlays', i => i.set(0, ipaRegion));
  };

  // The "stout" text was clicked...
  onClickStout = () => {
    this.data = this.data
      // Makes the stout text bold...
      .update('stoutStyles', i => i.push(styles.boldText))
      // Removes the bold from the IPA text...
      .update('ipaStyles', i => i.pop())
      // Replaces the IPA overlay with the stout overlay...
      .update('overlays', i => i.set(0, stoutRegion));
  };

  render() {
    const { ipaStyles, stoutStyles, overlays } = this.data.toJS();

    return (
      <View style={styles.container}>
        <View>
          {/* Text that when clicked, renders the IPA
               map overlay. */}
          <Text style={ipaStyles} onPress={this.onClickIpa}>
            IPA Fans
          </Text>

          {/* Text that when clicked, renders the stout
               map overlay. */}
          <Text style={stoutStyles} onPress={this.onClickStout}>
            Stout Fans
          </Text>
        </View>

        {/* Renders the map with the "overlays" array. There
             will only ever be a single overlay in this
             array. */}
        <MapView
          style={styles.mapView}
          showsPointsOfInterest={false}
          showsUserLocation
          followUserLocation
        >
          {overlays.map((v, i) => (
            <MapView.Polygon
              key={i}
              coordinates={v.coordinates}
              strokeColor={v.strokeColor}
              strokeWidth={v.strokeWidth}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
