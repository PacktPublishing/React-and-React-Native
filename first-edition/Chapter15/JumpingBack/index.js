import React from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import routes from './routes';
import styles from './styles';

const renderScene = (route, navigator) => (
  <route.Scene
    navigator={navigator}
    content={route.content}
  />
);

// The "LeftButton" and "RightButton" components
// are passed the "routes" array as a property so
// that they can do bounds-checking.
const routeMapper = {
  Title: (route, navigator) => (
    <route.Title
      navigator={navigator}
      title={route.title}
    />
  ),
  LeftButton: (route, navigator) => (
    <route.LeftButton
      navigator={navigator}
      route={route}
      routes={routes}
    />
  ),
  RightButton: (route, navigator) => (
    <route.RightButton
      navigator={navigator}
      route={route}
      routes={routes}
    />
  ),
};

const navigationBar = (
  <Navigator.NavigationBar
    style={styles.nav}
    routeMapper={routeMapper}
  />
);

// Notice how we're passing in an initial route stack
// again? This is how we're able to use "jumpForward()"
// and "jumpBack()".
const JumpingBack = () => (
  <Navigator
    initialRoute={routes[0]}
    initialRouteStack={routes}
    renderScene={renderScene}
    navigationBar={navigationBar}
  />
);

AppRegistry.registerComponent(
  'JumpingBack',
  () => JumpingBack
);
