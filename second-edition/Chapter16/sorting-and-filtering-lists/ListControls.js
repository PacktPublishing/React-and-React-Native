import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';
import ListFilter from './ListFilter';
import ListSort from './ListSort';

// Renders the "<ListFilter>" and "<ListSort>"
// components within a "<View>". The
// "styles.controls" style lays out the controls
// horizontally.
const ListControls = ({ onFilter, onSort, asc }) => (
  <View style={styles.controls}>
    <ListFilter onFilter={onFilter} />
    <ListSort onSort={onSort} asc={asc} />
  </View>
);

ListControls.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired
};

export default ListControls;
