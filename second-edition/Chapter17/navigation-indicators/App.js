import React from 'react';
import { createStackNavigator } from 'react-navigation';

import First from './First';
import Second from './Second';
import Third from './Third';

export default createStackNavigator(
  {
    First: {
      screen: props => (
        <First
          promise={new Promise(resolve => setTimeout(resolve, 1000))}
          {...props}
        />
      )
    },
    Second: {
      screen: props => (
        <Second
          promise={new Promise(resolve => setTimeout(resolve, 1000))}
          {...props}
        />
      )
    },
    Third: {
      screen: props => (
        <First
          promise={new Promise(resolve => setTimeout(resolve, 1000))}
          {...props}
        />
      )
    }
  },
  { initialRouteName: 'First' }
);
