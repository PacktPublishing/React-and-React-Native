import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

// The arrows to render based on the state of
// the "asc" property. Using a Map let's us
// stay declarative, rather than introducing
// logic into the JSX.
const arrows = new Map([[true, '▼'], [false, '▲']]);

// Renders the arrow text. When clicked, the
// "onSort()" function that's passed down from
// the container.
const ListSort = ({ onSort, asc }) => (
  <Text onPress={onSort}>{arrows.get(asc)}</Text>
);

ListSort.propTypes = {
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired
};

export default ListSort;
