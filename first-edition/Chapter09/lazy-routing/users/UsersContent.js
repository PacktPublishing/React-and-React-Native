import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UsersContent = props => props.content;

UsersContent.propTypes = {
  content: PropTypes.node.isRequired,
};

UsersContent.defaultProps = {
  content: (
    <ul>
      <li><Link to="users/active">Active Users</Link></li>
      <li><Link to="users/inactive">Inactive Users</Link></li>
    </ul>
  ),
};

export default UsersContent;
