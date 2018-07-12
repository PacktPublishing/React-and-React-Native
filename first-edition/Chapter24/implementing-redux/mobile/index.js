import React from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import store from './store';
import Main from './components/Main';

const ImplementingRedux = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

AppRegistry.registerComponent(
  'ImplementingRedux',
  () => ImplementingRedux
);
