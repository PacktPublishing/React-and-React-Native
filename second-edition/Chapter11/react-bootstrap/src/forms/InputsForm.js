import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import Input from './Input';

const InputsForm = props => (
  <Panel header={<h3>Inputs</h3>}>
    <form>
      {/* Uses the <Input> element to render
           a simple name field. There's a lot of
           properties passed here, many of them
           come from the container component. */}
      <Input
        type="text"
        label="Name"
        placeholder="First and last..."
        value={props.nameValue}
        onChange={props.nameChange}
        validationState={props.nameValidationState}
        validationText={props.nameValidationText}
      />

      {/* Uses the "<Input>" element to render a
           password input. */}
      <Input
        type="password"
        label="Password"
        value={props.passwordValue}
        onChange={props.passwordChange}
      />
    </form>
  </Panel>
);

InputsForm.propTypes = {
  nameValue: PropTypes.any,
  nameChange: PropTypes.func,
  nameValidationState: PropTypes.oneOf([
    undefined,
    'success',
    'warning',
    'error'
  ]),
  nameValidationText: PropTypes.string,
  passwordValue: PropTypes.any,
  passwordChange: PropTypes.func
};

export default InputsForm;
