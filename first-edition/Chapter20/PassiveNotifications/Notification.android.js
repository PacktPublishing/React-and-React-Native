import React, { PropTypes } from 'react';
import { ToastAndroid } from 'react-native';
import { Map as ImmutableMap } from 'immutable';

// Toast helper. Always returns "null" so that the
// output can be rendered as a React element.
const show = (message, duration) => {
  ToastAndroid.show(message, duration);
  return null;
};

// This component will always return null,
// since it's using an imperative React Native
// interface to display popup text. If the
// "message" property was provided, then
// we display a message.
const Notification = ({ message, duration }) =>
  ImmutableMap()
    .set(null, null)
    .set(undefined, null)
    .get(message, show(message, duration));

Notification.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number.isRequired,
};

Notification.defaultProps = {
  duration: ToastAndroid.LONG,
};

export default Notification;
