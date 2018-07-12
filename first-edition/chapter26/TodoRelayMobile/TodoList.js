import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { View } from 'react-native';

import Todo from './Todo';

// The list component itself is quite simple. Note the
// property that we're using to iterate over - there's
// "edges" and "nodes". This is reflective of a GraphQL
// collection.
const TodoList = ({ viewer }) => (
  <View>
    {viewer.todos.edges.map(edge => (
      <Todo
        key={edge.node.id}
        todo={edge.node}
        viewer={viewer}
      />
    ))}
  </View>
);

TodoList.propTypes = {
  viewer: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Relay.createContainer(TodoList, {
  initialVariables: {
    status: null,
  },

  // Variables that are sent along with the query. These
  // can come from UI elements. In this case, we want every
  // item, so we're providing a static value.
  prepareVariables() {
    return {
      status: 'any',
    };
  },

  // The fragments used by this component. Notice the
  // arguments that are passed to the "todos" query -
  // "status" and "first". We're also traversing the
  // structure of the graph using "edges" and "node",
  // so that we can tell the backend exactly what
  // data this component needs.
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        todos(
          status: $status,
          first: 2147483647  # max GraphQLInt
        ) {
          edges {
            node {
              id,
              ${Todo.getFragment('todo')},
            },
          },
        },
        ${Todo.getFragment('viewer')},
      }
    `,
  },
});
