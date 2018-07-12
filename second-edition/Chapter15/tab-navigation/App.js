import {
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
import { Platform } from 'react-native';
import Home from './Home';
import News from './News';
import Settings from './Settings';

const { createNavigator } = Platform.select({
  ios: { createNavigator: createBottomTabNavigator },
  android: { createNavigator: createDrawerNavigator }
});

export default createNavigator(
  {
    Home,
    News,
    Settings
  },
  { initialRouteName: 'Home' }
);
