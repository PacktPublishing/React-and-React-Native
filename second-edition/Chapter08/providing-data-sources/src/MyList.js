import React from 'react';
import PropTypes from 'prop-types';

// Renders an item list...
const MyList = ({ filterValue, items }) => {
  const filter = new RegExp(filterValue, 'i');

  return (
    <ul>
      {items
        .filter(item => filter.test(item))
        .map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

MyList.propTypes = {
  items: PropTypes.array.isRequired
};

export default MyList;
