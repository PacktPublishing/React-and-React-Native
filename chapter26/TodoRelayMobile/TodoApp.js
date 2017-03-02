import React, { Component, PropTypes } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import Relay from 'react-relay';

import styles from './styles';
import AddTodoMutation from './mutations/AddTodoMutation';
import TodoList from './TodoList';

export class TodoRelayMobile extends Component {
  static propTypes = {
    viewer: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    relay: PropTypes.shape({
      commitUpdate: PropTypes.func.isRequired,
    }),
  }

  // We need to keep track of new todo item text
  // as the user enters them.
  state = {
    text: '',
  }

  // When the user creates the todo by pressing enter,
  // the "AddTodoMutation" is sent to the backend,
  // with the new "text" and the "viewer" as the
  // arguments.
  onSubmitEditing = ({ nativeEvent: { text } }) => {
    this.props.relay.commitUpdate(
      new AddTodoMutation({
        text,
        viewer: this.props.viewer,
      })
    );

    this.setState({ text: '' });
  }

  onChangeText = text => this.setState({ text })

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="What needs to be done?"
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={this.onChangeText}
          value={this.state.text}
        />
        <TodoList viewer={this.props.viewer} />
      </View>
    );
  }
}

// Turns the "TodoApp" component into a Relay
// container component. This is where the data
// dependency for "TodoApp" is declared. We tell
// the "queries" value that was passed to "RootContainer"
// that we want a frament of fields from the "User" type.
export default Relay.createContainer(TodoRelayMobile, {
  fragments: {
    viewer: variables => Relay.QL`
      fragment on User {
        totalCount,
        ${AddTodoMutation.getFragment('viewer')},
        ${TodoList.getFragment('viewer', ...variables)},
      }
    `,
  },
});
