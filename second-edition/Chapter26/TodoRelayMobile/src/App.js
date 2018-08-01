import React from 'react';
import { View, Text } from 'react-native';
import { Network } from 'relay-local-schema';
import { Environment, RecordSource, Store } from 'relay-runtime';
import { QueryRenderer, graphql } from 'react-relay';

import schema from './data/schema';
import styles from './styles';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

if (typeof Buffer === 'undefined')
  global.Buffer = require('buffer').Buffer;

const environment = new Environment({
  network: Network.create({ schema }),
  store: new Store(new RecordSource())
});

export default () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query App_Query($status: String!) {
        viewer {
          ...TodoList_viewer
        }
      }
    `}
    variables={{ status: 'any' }}
    render={({ error, props }) => {
      if (error) {
        return <Text>Error!</Text>;
      }
      if (!props) {
        return <Text>Loading...</Text>;
      }
      return (
        <View style={styles.container}>
          <TodoInput environment={environment} {...props} />
          <TodoList {...props} />
        </View>
      );
    }}
  />
);
