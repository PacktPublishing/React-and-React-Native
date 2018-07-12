import React, { PropTypes } from 'react';

const UsersHeader = props => props.header;

UsersHeader.propTypes = {
  header: PropTypes.node.isRequired,
};

UsersHeader.defaultProps = {
  header: (<h1>Users</h1>),
};

export default UsersHeader;
