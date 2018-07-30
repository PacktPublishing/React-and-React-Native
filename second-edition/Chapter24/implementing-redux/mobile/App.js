import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import store from './store';
import Article from './components/Article';
import Articles from './components/Articles';

const Navigator = createStackNavigator(
  { Article, Articles },
  { initialRouteName: 'Articles' }
);

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
