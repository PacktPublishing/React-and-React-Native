import React, { Component } from 'react';
import { View, Text, Image, Slider } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';

export default class ResizingImages extends Component {
  // The initial state of this component includes
  // a local image source, and the width/height
  // image dimensions.
  state = {
    data: fromJS({
      source: require('./images/flux.png'),
      width: 100,
      height: 100
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

  render() {
    // The state values we need...
    const { source, width, height } = this.data.toJS();

    return (
      <View style={styles.container}>
        {/* The image is rendered using the
             "source", "width", and "height"
             state values. */}
        <Image source={source} style={{ width, height }} />
        {/* The current "width" and "height"
             values are displayed. */}
        <Text>Width: {width}</Text>
        <Text>Height: {height}</Text>
        {/* This slider scales the image size
             up or down by changing the "width"
             and "height" states. */}
        <Slider
          style={styles.slider}
          minimumValue={50}
          maximumValue={150}
          value={width}
          onValueChange={v => {
            this.data = this.data.merge({
              width: v,
              height: v
            });
          }}
        />
      </View>
    );
  }
}
