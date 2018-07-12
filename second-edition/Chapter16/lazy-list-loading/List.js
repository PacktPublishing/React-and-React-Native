import React from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList } from 'react-native';

import styles from './styles';

// Renders a "<FlatList>" component, and
// calls "fetchItems()" and the user scrolls
// to the end of the list.
const List = ({ data, fetchItems }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <Text style={styles.item}>{item.value}</Text>
    )}
    onEndReached={fetchItems}
  />
);

List.propTypes = {
  data: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired
};

export default List;
