import React, { PropTypes } from 'react';
import { Text, ListView } from 'react-native';

import styles from './styles';
import ListControls from './ListControls';

const List = ({
  Controls,
  source,
  onFilter,
  onSort,
  asc,
}) => (
  <ListView
    enableEmptySections
    dataSource={source}
    renderSectionHeader={() => (
      <Controls
        {...{ onFilter, onSort, asc }}
      />
    )}
    renderRow={i => (
      <Text style={styles.item}>{i}</Text>
    )}
  />
);

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  source: PropTypes.instanceOf(ListView.DataSource).isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};

List.defaultProps = {
  Controls: ListControls,
};

export default List;
