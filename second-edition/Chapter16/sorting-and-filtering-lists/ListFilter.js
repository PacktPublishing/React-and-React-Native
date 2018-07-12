import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import styles from './styles';

// Renders a "<TextInput>" component which allows the
// user to type in their filter text. This causes
// the "onFilter()" event handler to be called.
// This handler comes from "ListContainer" and changes
// the state of the list data source.
const ListFilter = ({ onFilter }) => (
  <View>
    <TextInput
      autoFocus
      placeholder="Search"
      style={styles.filter}
      onChangeText={onFilter}
    />
  </View>
);

ListFilter.propTypes = {
  onFilter: PropTypes.func.isRequired
};

export default ListFilter;
