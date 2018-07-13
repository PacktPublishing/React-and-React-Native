import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';

// For fetching human-readable address info.
const URL = 'https://maps.google.com/maps/api/geocode/json?latlng=';

export default class WhereAmI extends Component {
  // The "address" state is "loading..." initially because
  // it takes the longest to fetch.
  state = {
    data: fromJS({
      address: 'loading...'
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

  // We don't setup any geo data till the component
  // mounts.
  componentDidMount() {
    const setPosition = pos => {
      // This component renders the "coords" data from
      // a geolocation response. This can simply be merged
      // into the state map.
      this.data = this.data.merge(pos.coords);

      // We need the "latitude" and the "longitude"
      // in order to lookup the "address" from the
      // Google maps API.
      const {
        coords: { latitude, longitude }
      } = pos;

      // Fetches data from the Google Maps API then sets
      // the "address" state based on the response.
      fetch(`${URL}${latitude},${longitude}`)
        .then(resp => resp.json(), e => console.error(e))
        .then(({ results: [{ formatted_address }] }) => {
          this.data = this.data.set('address', formatted_address);
        });
    };

    // First, we try to lookup the current position
    // data and update the component state.
    navigator.geolocation.getCurrentPosition(setPosition);

    // Then, we setup a high accuracy watcher, that
    // issues a callback whenever the position changes.
    this.watcher = navigator.geolocation.watchPosition(
      setPosition,
      err => console.error(err),
      { enableHighAccuracy: true }
    );
  }

  // It's always a good idea to make sure that this
  // "watcher" is cleared when the component is removed.
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watcher);
  }

  render() {
    // Since we want to iterate over the properties
    // in the state map, we need to convert the map
    // to pairs using "entries()". Then we need to
    // use the spread operator to make the map iterator
    // into a plain array. The "sort()" method simply
    // sorts the map based on it's keys.
    const state = [...this.data.sortBy((v, k) => k).entries()];

    // Iterates over the state properties and renders them.
    return (
      <View style={styles.container}>
        {state.map(([k, v]) => (
          <Text key={k} style={styles.label}>
            {`${k[0].toUpperCase()}${k.slice(1)}`}: {v}
          </Text>
        ))}
      </View>
    );
  }
}
