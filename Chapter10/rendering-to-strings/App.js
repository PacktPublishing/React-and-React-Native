import React, { PropTypes } from 'react';

const App = ({ items }) => (
  <ul>
    {items.map(i => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

App.propTypes = {
  items: PropTypes
    .arrayOf(PropTypes.string)
    .isRequired,
};

export default App;
