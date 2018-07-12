import React from 'react';
import { createStackNavigator } from 'react-navigation';

import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

const routes = [First, Second, Third, Fourth];

export default createStackNavigator(
  routes.reduce(
    (result, route) => ({
      ...result,
      [route.name]: route
    }),
    {}
  ),
  {
    initialRouteName: 'First',
    initialRouteParams: {
      progress: route =>
        (routes.map(r => r.name).indexOf(route) + 1) / routes.length
    }
  }
);
