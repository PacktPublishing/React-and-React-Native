import React from 'react';
import PropTypes from 'prop-types';

// Renders a list of users...
const Users = ({ users }) => (
  <ul>{users.map(i => <li key={i}>{i}</li>)}</ul>
);

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
