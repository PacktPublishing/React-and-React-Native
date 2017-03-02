import React, { Component, PropTypes } from 'react';
import {
  View,
  Modal,
  Text,
} from 'react-native';
import { Map as ImmutableMap } from 'immutable';

import styles from './styles';

class Notification extends Component {

  static propTypes = {
    message: PropTypes.string,
    duration: PropTypes.number.isRequired,
  }

  static defaultProps = {
    duration: 1500,
  }

  // The modal component is either "visible", or not.
  // The "timer" is used to hide the notification
  // after some predetermined amount of time.
  state = { visible: false }
  timer = null

  showModal = (message, duration) => {
    // Update the "visible" state, based on whether
    // or not there's a "message" value.
    this.setState({
      visible: ImmutableMap()
        .set(null, false)
        .set(undefined, false)
        .get(message, true),
    });

    // Create a timer to hide the modal if a new
    // "message" is set.
    this.timer = ImmutableMap()
      .set(null, () => null)
      .set(undefined, () => null)
      .get(message, () => setTimeout(
        () => this.setState({ visible: false }),
        duration
      ))();
  }

  // When the component is mounted, show the modal
  // if a message was provided. Also set a timeout
  // that automatically closes the modal.
  componentWillMount() {
    this.showModal(
      this.props.message,
      this.props.duration,
    );
  }

  // Does the same thing as "componentWillMount()"
  // except it's called when new properties are passed.
  componentWillReceiveProps(props) {
    this.showModal(
      props.message,
      props.duration,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const modalProps = {
      animationType: 'fade',
      transparent: true,
      visible: this.state.visible,
    };

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
  duration: PropTypes.number.isRequired,
};

Notification.defaultProps = {
  duration: 1500,
};

export default Notification;
