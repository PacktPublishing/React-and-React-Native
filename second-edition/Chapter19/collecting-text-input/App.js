import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';

// A Generic "<Input>" component that we can use in our app.
// It's job is to wrap the "<TextInput>" component in a "<View>"
// so that we can render a label, and to apply styles to the
// appropriate components.
const Input = props => (
  <View style={styles.textInputContainer}>
    <Text style={styles.textInputLabel}>{props.label}</Text>
    <TextInput style={styles.textInput} {...props} />
  </View>
);

Input.propTypes = {
  label: PropTypes.string
};

export default class CollectingTextInput extends Component {
  // This state is only relevant for the "input events"
  // component. The "changedText" state is updated as
  // the user types while the "submittedText" state is
  // updated when they're done.
  state = {
    data: fromJS({
      changedText: '',
      submittedText: ''
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

  render() {
    const { changedText, submittedText } = this.data.toJS();

    return (
      <View style={styles.container}>
        {/* The simplest possible text input. */}
        <Input label="Basic Text Input:" />

        {/* The "secureTextEntry" property turns
             the text entry into a password input
             field. */}
        <Input label="Password Input:" secureTextEntry />

        {/* The "returnKeyType" property changes
             the return key that's displayed on the
             virtual keyboard. In this case, we want
             a "search" button. */}
        <Input label="Return Key:" returnKeyType="search" />

        {/* The "placeholder" property works just
             like it does with web text inputs. */}
        <Input label="Placeholder Text:" placeholder="Search" />

        {/* The "onChangeText" event is triggered as
             the user enters text. The "onSubmitEditing"
             event is triggered when they click "search". */}
        <Input
          label="Input Events:"
          onChangeText={e => {
            this.data = this.data.set('changedText', e);
          }}
          onSubmitEditing={e => {
            this.data = this.data.set(
              'submittedText',
              e.nativeEvent.text
            );
          }}
          onFocus={() => {
            this.data = this.data
              .set('changedText', '')
              .set('submittedText', '');
          }}
        />

        {/* Displays the captured state from the
             "input events" text input component. */}
        <Text>Changed: {changedText}</Text>
        <Text>Submitted: {submittedText}</Text>
      </View>
    );
  }
}
