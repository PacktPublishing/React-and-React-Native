/* eslint-disable global-require */
import React, { PropTypes } from 'react';
import {
  AppRegistry,
  View,
  Image,
} from 'react-native';

import styles from './styles';

// Renders two "<Image>" components, passing the
// properties of this component to the "source"
// property of each image.
const LoadingImages = ({
  reactSource,
  relaySource,
}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={reactSource}
    />
    <Image
      style={styles.image}
      source={relaySource}
    />
  </View>
);

// The "source" property can be either
// an object with a "uri" string, or a number
// represending a local "require()" resource.
const sourceProp = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string.isRequired,
  }),
  PropTypes.number,
]).isRequired;

LoadingImages.propTypes = {
  reactSource: sourceProp,
  relaySource: sourceProp,
};

LoadingImages.defaultProps = {
  // The "reactSource" image comes from a remote
  // location.
  reactSource: {
    uri: 'https://facebook.github.io/react/img/logo_small_2x.png',
  },

  // The "relaySource" image comes from a local
  // source.
  relaySource: require('./images/relay.png'),
};

AppRegistry.registerComponent(
  'LoadingImages',
  () => LoadingImages
);
