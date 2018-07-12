import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Radio, Checkbox, FormGroup } from 'react-bootstrap';

const RadioForm = props => (
  <Panel header={<h3>Radios & Checkboxes</h3>}>
    {/* Renders a group of related radio buttons. Note
         that each radio needs to hae the same "name"
         property, otherwise, the user will be able to
         select multiple radios in the same group. The
         "checked", "disabled", and "onChange" properties
         all come from the container component. */}
    <FormGroup>
      <Radio
        name="radio"
        onChange={props.checkboxEnabledChange}
        checked={props.checkboxEnabled}
        disabled={!props.radiosEnabled}
      >
        Checkbox enabled
      </Radio>
      <Radio
        name="radio"
        onChange={props.checkboxDisabledChange}
        checked={!props.checkboxEnabled}
        disabled={!props.radiosEnabled}
      >
        Checkbox disabled
      </Radio>
    </FormGroup>

    {/* Reanders a checkbox and uses the same approach
         as the radios above: setting it's properties from
         state that's passed in from the container. */}
    <FormGroup>
      <Checkbox
        onChange={props.checkboxChange}
        checked={props.radiosEnabled}
        disabled={!props.checkboxEnabled}
      >
        Radios enabled
      </Checkbox>
    </FormGroup>
  </Panel>
);

RadioForm.propTypes = {
  checkboxEnabled: PropTypes.bool.isRequired,
  radiosEnabled: PropTypes.bool.isRequired,
  checkboxEnabledChange: PropTypes.func.isRequired,
  checkboxDisabledChange: PropTypes.func.isRequired,
  checkboxChange: PropTypes.func.isRequired
};

export default RadioForm;
