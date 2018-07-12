import React from 'react';
import {
  AppRegistry,
  Navigator,
  View,
} from 'react-native';

import routes from './routes';
import styles from './styles';
import ProgressBar from './ProgressBar';

const renderScene = route => (<route.Scene />);

const routeMapper = {
  Title: (route, navigator) => (
    <View style={styles.progress}>
      <route.Title navigator={navigator} />
      { /* The "<ProgressBar>" component is rendered just
           below the title text. There's no progress label,
           just the bar itself. The "progress" itself is
           computed based on where the current route is
           in the route stack. */ }
      <ProgressBar
        label={false}
        progress={
          (routes.indexOf(route) + 1) / routes.length
        }
      />
    </View>
  ),
  LeftButton: (route, navigator) => (
    <route.LeftButton navigator={navigator} />
  ),
  RightButton: (route, navigator) => (
    <route.RightButton navigator={navigator} />
  ),
};

const navigationBar = (
  <Navigator.NavigationBar
    style={styles.nav}
    routeMapper={routeMapper}
  />
);

const StepProgress = () => (
  <Navigator
    initialRoute={routes[0]}
    initialRouteStack={routes}
    renderScene={renderScene}
    navigationBar={navigationBar}
  />
);

AppRegistry.registerComponent(
  'StepProgress',
  () => StepProgress
);
