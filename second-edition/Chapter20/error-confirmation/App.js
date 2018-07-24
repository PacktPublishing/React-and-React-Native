import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import ErrorModal from './ErrorModal';
import ConfirmationAlert from './ConfirmationAlert';

export default class ErrorConfirmation extends Component {
  state = {
    data: fromJS({
      modalVisible: false,
      alertVisible: false
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

  // A "modal" button was pressed. So show
  // or hide the modal based on its current state.
  toggleModal = () => {
    this.data = this.data.update('modalVisible', v => !v);
  };

  // A "alert" button was pressed. So show
  // or hide the alert based on its current state.
  toggleAlert = () => {
    this.data = this.data.update('alertVisible', v => !v);
  };

  render() {
    const { modalVisible, alertVisible } = this.state.data.toJS();

    const { toggleModal, toggleAlert } = this;

    return (
      <View style={styles.container}>
        <ErrorModal
          animationType="fade"
          visible={modalVisible}
          onPressConfirm={toggleModal}
          onPressCancel={toggleModal}
        />
        <ConfirmationAlert
          message="Failed to do the thing..."
          visible={alertVisible}
          buttons={[
            {
              text: 'Dismiss',
              onPress: toggleAlert
            }
          ]}
        />
        <Text style={styles.text} onPress={toggleModal}>
          Show Error Modal
        </Text>
        <Text style={styles.text} onPress={toggleAlert}>
          Show Error Alert
        </Text>
      </View>
    );
  }
}
