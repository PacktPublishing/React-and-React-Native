import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import ConfirmationModal from './ConfirmationModal';
import ConfirmationAlert from './ConfirmationAlert';

export default class SuccessConfirmation extends Component {
  // The two pieces of state used to control
  // the display of the modal and the alert
  // views.
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
    const { modalVisible, alertVisible } = this.data.toJS();

    const { toggleModal, toggleAlert } = this;

    return (
      <View style={styles.container}>
        {/* Renders the "<ConfirmationModal>" component,
             which is hidden by default and controlled
             by the "modalVisible" state. */}
        <ConfirmationModal
          animationType="fade"
          visible={modalVisible}
          onPressConfirm={toggleModal}
          onPressCancel={toggleModal}
        />

        {/* Renders the "<ConfirmationAlert>" component,
             which doesn't actually render anything since
             it controls an imperative API under the hood.
             The "alertVisible" state controls this API. */}
        <ConfirmationAlert
          title="Are you sure?"
          message="For realz?"
          visible={alertVisible}
          buttons={[
            {
              text: 'Nope',
              onPress: toggleAlert
            },
            {
              text: 'Yep',
              onPress: toggleAlert
            }
          ]}
        />

        {/* Shows the "<ConfirmationModal>" component
             by changing the "modalVisible" state. */}
        <Text style={styles.text} onPress={toggleModal}>
          Show Confirmation Modal
        </Text>

        {/* Shows the "<ConfirmationAlert>" component
             by changing the "alertVisible" state. */}
        <Text style={styles.text} onPress={toggleAlert}>
          Show Confimation Alert
        </Text>
      </View>
    );
  }
}
