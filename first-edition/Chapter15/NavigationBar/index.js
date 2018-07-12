import React from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import routes from './routes';
import styles from './styles';

// Renders the scene, the "navigator" property
// is no longer needed here since navigation is
// now handled separately.
const renderScene = route => (<route.Scene />);

// The composition of the navbar is three components:
// "Title", "LeftButton", and "RightButton". These
// components come from the "route".
const routeMapper = {
  Title: (route, navigator) => (
    <route.Title navigator={navigator} />
  ),
  LeftButton: (route, navigator) => (
    <route.LeftButton navigator={navigator} />
  ),
  RightButton: (route, navigator) => (
    <route.RightButton navigator={navigator} />
  ),
};

// Renders the "<NavigationBar>" component, using
// the "routeMapper" object to configure the
// navigation buttons. We can also style it however
// we want.
const navigationBar = (
  <Navigator.NavigationBar
    style={styles.nav}
    routeMapper={routeMapper}
  />
);

// Uses the "navigationBar" property to render the
// navbar independent of the scene content.
const NavigationBar = () => (
  <Navigator
    initialRoute={routes[0]}
    initialRouteStack={routes}
    renderScene={renderScene}
    navigationBar={navigationBar}
  />
);

AppRegistry.registerComponent(
  'NavigationBar',
  () => NavigationBar
);
