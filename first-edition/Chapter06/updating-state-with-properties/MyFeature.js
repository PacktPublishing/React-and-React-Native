import React, { Component } from 'react';
import { fromJS } from 'immutable';

import MyButton from './MyButton';

class MyFeature extends Component {

  state = {
    data: fromJS({
      clicks: 0,
      disabled: false,
      text: '',
    }),
  }

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // Sets the "text" state before the initial render.
  // If a "text" property was provided to the component,
  // then it overrides the initial "text" state.
  componentWillMount() {
    this.data = this.data
      .set('text', this.props.text); // eslint-disable-line react/prop-types
  }

  // If the component is re-rendered with new
  // property values, this method is called with the
  // new property values. If the "disabled" property
  // is provided, we use it to update the "disabled"
  // state. Calling "setState()" here will not
  // cause a re-render, because the component is already
  // in the middle of a re-render.
  componentWillReceiveProps({ disabled }) {
    this.data = this.data
      .set('disabled', disabled);
  }

  // Click event handler, increments the "click" count.
  onClick = () => {
    this.data = this.data
      .update('clicks', c => c + 1);
  }

  // Renders the "<MyButton>" component, passing it the
  // "onClick()" handler, and the state as properties.
  render() {
    return (
      <MyButton
        onClick={this.onClick}
        {...this.data.toJS()}
      />
    );
  }
}

MyFeature.defaultProps = {
  text: 'A Button',
};

export default MyFeature;
