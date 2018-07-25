import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import LazyImage from './LazyImage';
import Button from './Button';

// The remote image to load...
const remote =
  'https://facebook.github.io/react-native/docs/assets/favicon.png';

export default class LazyLoading extends Component {
  state = {
    source: null
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Renders the lazy image. Since there's
             no "source" value initially, the placeholder
             image will be rendered. */}
        <LazyImage
          style={{ width: 200, height: 100 }}
          resizeMode="contain"
          source={this.state.source}
        />
        {/* When pressed, this button changes the
             "source" of the lazy image. When the new
             source loads, the placeholder image is
             replaced. */}
        <Button
          label="Load Remote"
          onPress={() =>
            this.setState({
              source: { uri: remote }
            })
          }
        />
      </View>
    );
  }
}
