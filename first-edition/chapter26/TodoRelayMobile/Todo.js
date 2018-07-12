import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import {
  Text,
  View,
  Switch,
} from 'react-native';

import styles from './styles';
import ChangeTodoStatusMutation from './mutations/ChangeTodoStatusMutation';

// How to style the todo text, based on the
// boolean value of the "completed" property.
const completeStyleMap = new Map([
  [true, { textDecorationLine: 'line-through' }],
  [false, {}],
]);

class Todo extends Component {
  static propTypes = {
    relay: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    viewer: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    todo: PropTypes.shape({
      text: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
      complete: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    }),
  }

  // Handles the "switch" button click. The "complete"
  // argument is the value of the switch UI control,
  // which is sent to the "ChangeTodoStatusMutation".
  onValueChange = complete =>
    this.props.relay.commitUpdate(
      new ChangeTodoStatusMutation({
        complete,
        todo: this.props.todo,
        viewer: this.props.viewer,
      })
    )

  render() {
    // The "todo" is passed in from the "TodoList"
    // component.
    const {
      props: {
        todo: {
          text,
          complete,
        },
      },
      onValueChange,
    } = this;

    // The actual todo is a "<Switch>" component,
    // and the todo item text, styled based on it's
    // "complete" value.
    return (
      <View style={styles.todoItem}>
        <Switch
          value={complete}
          onValueChange={onValueChange}
        />
        <Text style={completeStyleMap.get(complete)}>
          {text}
        </Text>
      </View>
    );
  }
}

// The fragments defined here are actually used
// in the "TodoList" component when it runs the
// "todos" query. We also have to tell it about
// the fragments defined by "ChangeTodoStatusMutation".
export default Relay.createContainer(Todo, {
  fragments: {
    todo: () => Relay.QL`
      fragment on Todo {
        complete,
        id,
        text,
        ${ChangeTodoStatusMutation.getFragment('todo')},
      }
    `,
    viewer: () => Relay.QL`
      fragment on User {
        ${ChangeTodoStatusMutation.getFragment('viewer')},
      }
    `,
  },
});
