import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';

export default createStackNavigator(
  {
    Home,
    Settings
  },
  { initialRouteName: 'Home' }
);
