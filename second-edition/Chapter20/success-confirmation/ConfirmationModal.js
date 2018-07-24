import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal } from 'react-native';

import styles from './styles';

// Uses "<Modal>" to display the underlying view
// on top of the current view. Properties passed to
// this component are also passed to the modal.
const ConfirmationModal = props => (
  <Modal {...props}>
    {/* Slightly confusing, but we need an inner and
         an outer "<View>" to style the height of the
         modal correctly. */}
    <View style={styles.modalContainer}>
      <View style={styles.modalInner}>
        {/* The confirmation message... */}
        <Text style={styles.modalText}>Dude, srsly?</Text>

        {/* The confirmation and the cancel buttons. Each
             button triggers a different callback function
             that's passed in from the container
             component. */}
        <Text
          style={styles.modalButton}
          onPress={props.onPressConfirm}
        >
          Yep
        </Text>
        <Text
          style={styles.modalButton}
          onPress={props.onPressCancel}
        >
          Nope
        </Text>
      </View>
    </View>
  </Modal>
);

ConfirmationModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onPressConfirm: PropTypes.func.isRequired,
  onPressCancel: PropTypes.func.isRequired
};

ConfirmationModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {}
};

export default ConfirmationModal;
