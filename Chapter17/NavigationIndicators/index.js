import React from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import first from './scenes/first';

// The "<route.Scene>" component gets a promise property
// passed to it, by calling "route.fetchData()". This
// promise is what controls the progress indicator display.
const renderScene = (route, navigator) => (
  <route.Scene
    promise={route.fetchData()}
    navigator={navigator}
  />
);

const NavigationIndicators = () => (
  <Navigator
    initialRoute={first}
    renderScene={renderScene}
  />
);

AppRegistry.registerComponent(
  'NavigationIndicators',
  () => NavigationIndicators
);
