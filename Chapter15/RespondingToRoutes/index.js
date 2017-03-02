import React from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import routes from './routes';

// Renders a scene. The "Scene" is a React component, and
// is found as a property of the "route". The "navigator"
// instance is passed to the scene as a property.
const renderScene = (route, navigator) => (
  <route.Scene navigator={navigator} />
);

// Renders a "<Navigator>" component. This is the root
// component of the application because it manages
// "scenes" that represent actual content. It's given
// and "initialRoute" to render when the application
// starts, and a "initialRouteStack" for all possible
// routes.
const RespondingToRoutes = () => (
  <Navigator
    initialRoute={routes[0]}
    initialRouteStack={routes}
    renderScene={renderScene}
  />
);

AppRegistry.registerComponent(
  'RespondingToRoutes',
  () => RespondingToRoutes
);
