import React, { PropTypes } from 'react';
import {
  View,
  Text,
  Switch,
} from 'react-native';

import styles from './styles';

// A fairly straightforward wrapper component
// that adds a label to the React Native
// "<Switch>" component.
const CustomSwitch = props => (
  <View style={styles.customSwitch}>
    <Text>{props.label}</Text>
    <Switch {...props} />
  </View>
);

CustomSwitch.propTypes = {
  label: PropTypes.string,
};

export default CustomSwitch;
