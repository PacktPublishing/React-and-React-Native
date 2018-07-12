import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';

// A generic input element that encapsulates several
// of the react-bootstrap components that are necessary
// for event simple scenarios.
const Input = ({
  type,
  label,
  value,
  placeholder,
  onChange,
  validationState,
  validationText
}) => (
  <FormGroup validationState={validationState}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    <FormControl.Feedback />
    <HelpBlock>{validationText}</HelpBlock>
  </FormGroup>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  validationState: PropTypes.oneOf([
    undefined,
    'success',
    'warning',
    'error'
  ]),
  validationText: PropTypes.string
};

export default Input;
