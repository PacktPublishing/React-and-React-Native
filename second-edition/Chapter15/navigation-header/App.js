import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Details from './Details';

export default createStackNavigator(
  {
    Home,
    Details
  },
  { initialRouteName: 'Home' }
);
