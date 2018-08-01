import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import { Text, View, Switch } from 'react-native';

import ChangeTodoStatusMutation from './mutations/ChangeTodoStatusMutation';
import styles from './styles';

const completeStyleMap = new Map([
  [true, { textDecorationLine: 'line-through' }],
  [false, {}]
]);

class Todo extends Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired
  };

  onValueChange = value => {
    const { relay, viewer, todo } = this.props;

    ChangeTodoStatusMutation.commit(
      relay.environment,
      viewer,
      todo,
      value
    );
  };

  render() {
    const {
      todo: { text, complete }
    } = this.props;

    return (
      <View style={styles.todoItem}>
        <Switch value={complete} onValueChange={this.onValueChange} />
        <Text style={completeStyleMap.get(complete)}>{text}</Text>
      </View>
    );
  }
}

export default createFragmentContainer(Todo, {
  viewer: graphql`
    fragment Todo_viewer on User {
      id
    }
  `,
  todo: graphql`
    fragment Todo_todo on Todo {
      id
      complete
      text
    }
  `
});
