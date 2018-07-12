import React, { PropTypes } from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

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
  onFilter: PropTypes.func.isRequired,
};

export default ListFilter;
