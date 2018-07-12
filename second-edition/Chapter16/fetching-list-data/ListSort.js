import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const arrows = new Map([[true, '▼'], [false, '▲']]);

const ListSort = ({ onSort, asc }) => (
  <Text onPress={onSort}>{arrows.get(asc)}</Text>
);

ListSort.propTypes = {
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired
};

export default ListSort;
