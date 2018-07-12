import React from 'react';
import { AppRegistry } from 'react-native';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';

import viewerQueries from './queries/ViewerQueries';
import TodoApp from './TodoApp';

// Since this is a native app instead of a web
// app, we have to tell Relay where to find
// the GraphQL backend.
Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://localhost:8080')
);

AppRegistry.registerComponent(
  'TodoRelayMobile',
  () => () => (
    // The "<RootContainer>" component is the entry
    // point for Relay in React Native. It takes the
    // main component - "TodoApp" - and uses
    // "viewerQueries" to kick-off communication
    // with the backend.
    <RootContainer
      Component={TodoApp}
      route={{
        name: 'viewer',
        params: {},
        queries: viewerQueries,
      }}
    />
  )
);
