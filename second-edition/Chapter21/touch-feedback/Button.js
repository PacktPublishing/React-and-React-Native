import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import styles from './styles';

// The "touchables" map is used to get the right
// component to wrap around the button. The
// "undefined" key represents the default.
const touchables = new Map([
  ['opacity', TouchableOpacity],
  ['highlight', TouchableHighlight],
  [undefined, TouchableOpacity]
]);

const Button = ({ label, onPress, touchable }) => {
  // Get's the "Touchable" component to use,
  // based on the "touchable" property value.
  const Touchable = touchables.get(touchable);

  // Properties to pass to the "Touchable"
  // component.
  const touchableProps = {
    style: styles.button,
    underlayColor: 'rgba(112,128,144,0.3)',
    onPress
  };

  // Renders the "<Text>" component that's
  // styled to look like a button, and is
  // wrapped in a "<Touchable>" component
  // to properly handle user interactions.
  return (
    <Touchable {...touchableProps}>
      <Text style={styles.buttonText}> {label} </Text>
    </Touchable>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  touchable: PropTypes.oneOf(['opacity', 'highlight'])
};

export default Button;
