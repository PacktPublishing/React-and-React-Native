import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

// The local placeholder image source.
const placeholder = require('./images/placeholder.png');

// The mapping to the "loaded" state that gets us
// the appropriate image component.
const Placeholder = props =>
  new Map([
    [true, null],
    [false, <Image {...props} source={placeholder} />]
  ]).get(props.loaded);

class LazyImage extends Component {
  // The "width" and "height" properties
  // are required. All other properties are
  // forwarded to the actual "<Image>"
  // component.
  static propTypes = {
    style: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  };

  constructor() {
    super();

    // We assume that the source hasn't finished
    // loading yet.
    this.state = {
      loaded: false
    };
  }

  render() {
    // The props and state this component
    // needs in order to render...
    const {
      props: {
        style: { width, height }
      },
      state: { loaded }
    } = this;

    return (
      <View style={{ width, height }}>
        {/* The placeholder image is just a standard
             "<Image>" component with a predefined
             source. It isn't rendered if "loaded" is
             true. */}
        <Placeholder loaded={loaded} {...this.props} />
        {/* The actual image is forwarded props that
             are passed to "<LazyImage>". The "onLoad"
             handler ensures the "loaded" state is true,
             removing the placeholder image. */}
        <Image
          {...this.props}
          onLoad={() =>
            this.setState({
              loaded: true
            })
          }
        />
      </View>
    );
  }
}

export default LazyImage;
