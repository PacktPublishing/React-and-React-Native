import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Text } from 'react-native';
import { Map } from 'immutable';

import styles from './styles';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
    duration: PropTypes.number.isRequired
  };

  static defaultProps = {
    duration: 1500
  };

  static getDerivedStateFromProps(props) {
    // Update the "visible" state, based on whether
    // or not there's a "message" value.
    return {
      ...this.state,
      visible: Map([[null, false], [undefined, false]]).get(
        props.message,
        true
      )
    };
  }

  // The modal component is either "visible", or not.
  // The "timer" is used to hide the notification
  // after some predetermined amount of time.
  state = { visible: false };
  timer = null;

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const modalProps = {
      animationType: 'fade',
      transparent: true,
      visible: this.state.visible
    };

    this.timer = Map([
      [null, () => null],
      [undefined, () => null]
    ]).get(this.props.message, () =>
      setTimeout(
        () => this.setState({ visible: false }),
        this.props.duration
      )
    )();

    return (
      <Modal {...modalProps}>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationInner}>
            <Text>{this.props.message}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number.isRequired
};

Notification.defaultProps = {
  duration: 1500
};

export default Notification;
