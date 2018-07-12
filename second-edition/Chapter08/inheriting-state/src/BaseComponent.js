import { Component } from 'react';
import { fromJS } from 'immutable';

export default class BaseComponent extends Component {
  state = {
    data: fromJS({
      name: 'Mark',
      enabled: false,
      placeholder: ''
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

  // The base component doesn't actually render anything,
  // but it still needs a render method.
  render() {
    return null;
  }
}
