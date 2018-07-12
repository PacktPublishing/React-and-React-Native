import React, { Component } from 'react';
import { fromJS } from 'immutable';

import RadioForm from './RadioForm';

class RadioFormContainer extends Component {
  // Controls the enabled state of a group of
  // radio buttons and a checkbox. The radios
  // toggle the state of the checkbox while the
  // checkbox toggles the state of the radios.
  state = {
    data: fromJS({
      checkboxEnabled: false,
      radiosEnabled: true,
      checkboxEnabledChange: () => {
        this.data = this.data.set('checkboxEnabled', true);
      },
      checkboxDisabledChange: () => {
        this.data = this.data.set('checkboxEnabled', false);
      },
      checkboxChange: () => {
        this.data = this.data.update(
          'radiosEnabled',
          enabled => !enabled
        );
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
    return <RadioForm {...this.data.toJS()} />;
  }
}

export default RadioFormContainer;
