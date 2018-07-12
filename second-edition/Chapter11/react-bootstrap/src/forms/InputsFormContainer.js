import React, { Component } from 'react';
import { fromJS } from 'immutable';

import InputsForm from './InputsForm';

// Validates the given "name". It should have a space,
// and it should have more than 3 characters. There are
// many scenarios not accounted for here, but are easy
// to add.
function validateName(name) {
  if (name.search(/ /) === -1) {
    return 'First and last name, separated with a space';
  } else if (name.length < 4) {
    return 'Less than 4 characters? Srsly?';
  }

  return null;
}

class InputsFormContainer extends Component {
  state = {
    data: fromJS({
      // "Name" value and change handler.
      nameValue: '',
      // When the name changes, we use "validateName()"
      // to set "nameValidationState" and
      // "nameValidationText".
      nameChange: e => {
        this.data = this.data.merge({
          nameValue: e.target.value,
          nameValidationState:
            validateName(e.target.value) === null
              ? 'success'
              : 'error',
          nameValidationText: validateName(e.target.value)
        });
      },
      // "Password" value and change handler.
      passwordValue: '',
      passwordChange: e => {
        this.data = this.data.set('passwordValue', e.target.value);
      }
    })
  };

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  render() {
    return <InputsForm {...this.data.toJS()} />;
  }
}

export default InputsFormContainer;
