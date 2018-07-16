import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, DatePickerIOS } from 'react-native';

import styles from './styles';

// A simple abstraction that adds a label to
// the "<DatePickerIOS>" component.
const DatePicker = props => (
  <View style={styles.datePickerContainer}>
    <Text style={styles.datePickerLabel}>{props.label}</Text>
    <DatePickerIOS mode="date" {...props} />
  </View>
);

DatePicker.propTypes = {
  label: PropTypes.string
};

export default DatePicker;
