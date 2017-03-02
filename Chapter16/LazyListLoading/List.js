import React, { PropTypes } from 'react';
import { Text, ListView } from 'react-native';

import styles from './styles';

// Renders a "<ListView>" component, and
// calls "fetchItems()" and the user scrolls
// to the end of the list.
const List = ({
  source,
  fetchItems,
}) => (
  <ListView
    enableEmptySections
    dataSource={source}
    renderRow={i => (
      <Text style={styles.item}>{i}</Text>
    )}
    onEndReached={fetchItems}
  />
);

List.propTypes = {
  source: PropTypes.instanceOf(ListView.DataSource).isRequired,
  fetchItems: PropTypes.func.isRequired,
};

export default List;
