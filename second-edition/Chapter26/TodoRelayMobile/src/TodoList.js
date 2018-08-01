import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';

import Todo from './Todo';

class TodoList extends Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired
  };

  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.shape({
        status: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  render() {
    const { viewer } = this.props;
    return (
      <View>
        {viewer.todos.edges.map(edge => (
          <Todo key={edge.node.id} viewer={viewer} todo={edge.node} />
        ))}
      </View>
    );
  }
}

export default createFragmentContainer(
  TodoList,
  graphql`
    fragment TodoList_viewer on User {
      todos(status: $status, first: 2147483647)
        @connection(key: "TodoList_todos") {
        edges {
          node {
            id
            complete
            ...Todo_todo
          }
        }
      }
      id
      numTodos
      numCompletedTodos
      ...Todo_viewer
    }
  `
);
