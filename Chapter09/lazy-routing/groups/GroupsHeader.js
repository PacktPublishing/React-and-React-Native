import React, { PropTypes } from 'react';

const GroupsHeader = props => props.header;

GroupsHeader.propTypes = {
  header: PropTypes.node.isRequired,
};

GroupsHeader.defaultProps = {
  header: (<h1>Groups</h1>),
};

export default GroupsHeader;
