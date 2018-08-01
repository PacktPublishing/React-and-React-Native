import React, { Component } from 'react';
import { TextInput } from 'react-native';

import styles from './styles';
import AddTodoMutation from './mutations/AddTodoMutation';

export default class App extends Component {
  onSubmitEditing = ({ nativeEvent: { text } }) => {
    const { environment, viewer } = this.props;
    AddTodoMutation.commit(environment, viewer, text);
  };

  render() {
    return (
      <TextInput
        style={styles.textInput}
        placeholder="What needs to be done?"
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}
