import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const GroupsContent = props => props.content;

GroupsContent.propTypes = {
  content: PropTypes.node.isRequired,
};

GroupsContent.defaultProps = {
  content: (
    <ul>
      <li><Link to="groups/active">Active Groups</Link></li>
      <li><Link to="groups/inactive">Inactive Groups</Link></li>
    </ul>
  ),
};

export default GroupsContent;
