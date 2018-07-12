import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ myHeader, myContent }) => (
  <section>
    <header>{myHeader}</header>
    <main>{myContent}</main>
  </section>
);

// The "myHeader" property requires a React
// element. The "myContent" property requires
// a node that can be rendered. This includes
// React elements, but also strings.
MyComponent.propTypes = {
  myHeader: PropTypes.element.isRequired,
  myContent: PropTypes.node.isRequired
};

export default MyComponent;
