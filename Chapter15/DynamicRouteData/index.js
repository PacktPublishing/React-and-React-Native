import React from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import routes from './routes';
import styles from './styles';

// The scene content now comes from the "route".
const renderScene = route => (
  <route.Scene
    content={route.content}
  />
);

// The "routeMapper" object now has to pass each navbar item
// more properties since the same component is used now. For
// example, the "LeftButton" component passes in "content"
// and the "route" that's to be activated if the user presses
// the button.
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
      content={route.leftTitle}
      route={route.leftRoute}
    />
  ),
  RightButton: (route, navigator) => (
    <route.RightButton
      navigator={navigator}
      content={route.rightTitle}
      route={route.rightRoute}
    />
  ),
};

const navigationBar = (
  <Navigator.NavigationBar
    style={styles.nav}
    routeMapper={routeMapper}
  />
);

// The "Navigator" component no longer has an initial
// route stack passed to it. Instead, current routes
// are "replaced" by new routes.
const DynamicRouteData = () => (
  <Navigator
    initialRoute={routes[0]}
    renderScene={renderScene}
    navigationBar={navigationBar}
  />
);

AppRegistry.registerComponent(
  'DynamicRouteData',
  () => DynamicRouteData
);
