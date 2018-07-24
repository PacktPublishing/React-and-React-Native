import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

// The "actions" Map will map the "visible"
// property to the "Alert.alert()" function,
// or to a noop function.
const actions = new Map([[true, Alert.alert], [false, () => {}]]);

class ConfirmationAlert extends Component {
  // When the component is mounted, show the
  // alert if "visible" is true. Otherwise,
  // this is a noop.
  componentDidMount() {
    actions.get(this.props.visible)(
      this.props.title,
      this.props.message,
      this.props.buttons
    );
  }

  // When the "visible" property value changes,
  // display the alert if the "visible"
  // property is true.
  componentWillReceiveProps(props) {
    actions.get(props.visible)(
      props.title,
      props.message,
      props.buttons
    );
  }

  // Since an imperative API is used to display
  // the alert, we don't actually render anything.
  render() {
    return null;
  }
}

ConfirmationAlert.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.array
};

export default ConfirmationAlert;
