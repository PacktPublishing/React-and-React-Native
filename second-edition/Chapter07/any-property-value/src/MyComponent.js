import React from 'react';
import PropTypes from 'prop-types';

// Renders a component with a header and a simple
// progress bar, using the provided property
// values.
const MyComponent = ({ label, value, max }) => (
  <section>
    <h5>{label}</h5>
    <progress {...{ max, value }} />
  </section>
);

// These property values can be anything, as denoted by
// the "PropTypes.any" prop type.
MyComponent.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
  max: PropTypes.any
};

export default MyComponent;
