import React from 'react';
import PropTypes from 'prop-types';
import { getState, setState } from './store';

// When the filter input value changes.
function onChange(e) {
  // Updates the state of the store.
  setState(getState().set('filterValue', e.target.value));
}

// Renders a simple input element to filter a list.
const MyInput = ({ value, placeholder }) => (
  <input
    autoFocus
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

MyInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default MyInput;
