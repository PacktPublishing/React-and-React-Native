import React from 'react';
import PropTypes from 'prop-types';
import { View, Picker, Text } from 'react-native';
import styles from './styles';

// The "<Select>" component provides an
// abstraction around the "<Picker>" component.
// It actually has two outer views that are
// needed to get the styling right.
const Select = props => (
  <View style={styles.pickerHeight}>
    <View style={styles.pickerContainer}>
      {/* The label for the picker... */}
      <Text style={styles.pickerLabel}>{props.label}</Text>
      <Picker style={styles.picker} {...props}>
        {/* Maps each "items" value to a
             "<Picker.Item>" component. */}
        {props.items.map(i => <Picker.Item key={i.label} {...i} />)}
      </Picker>
    </View>
  </View>
);

Select.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string
};

export default Select;
