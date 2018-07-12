import React from 'react';
import PropTypes from 'prop-types';

// Any one of these is a valid "level"
// property value.
const levels = new Array(10).fill(null).map((v, i) => i + 1);

// This is the "shape" of the object we expect
// to find in the "user" property value.
const userShape = {
  name: PropTypes.string,
  age: PropTypes.number
};

const MyComponent = ({ level, user }) => (
  <section>
    <p>{level}</p>
    <p>{user.name}</p>
    <p>{user.age}</p>
  </section>
);

// The property spec for this component uses
// "oneOf()" and "shape()" to define the required
// property vlues.
MyComponent.propTypes = {
  level: PropTypes.oneOf(levels),
  user: PropTypes.shape(userShape)
};

export default MyComponent;
