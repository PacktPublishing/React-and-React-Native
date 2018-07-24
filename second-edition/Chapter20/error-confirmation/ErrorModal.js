import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal } from 'react-native';

import styles from './styles';

// Declares styles for the error modal by
// combining regular modal styles with
// error styles.
const innerViewStyle = [styles.modalInner, styles.modalInnerError];

const textStyle = [styles.modalText, styles.modalTextError];

const buttonStyle = [styles.modalButton, styles.modalButtonError];

// Just like a success modal, accept for the addition of
// error styles.
const ErrorModal = props => (
  <Modal {...props}>
    <View style={styles.modalContainer}>
      <View style={innerViewStyle}>
        <Text style={textStyle}>Epic fail!</Text>
        <Text style={buttonStyle} onPress={props.onPressConfirm}>
          Fix it
        </Text>
        <Text style={buttonStyle} onPress={props.onPressCancel}>
          Ignore it
        </Text>
      </View>
    </View>
  </Modal>
);

ErrorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onPressConfirm: PropTypes.func.isRequired,
  onPressCancel: PropTypes.func.isRequired
};

ErrorModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {}
};

export default ErrorModal;
