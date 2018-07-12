import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Details from './Details';

const Nav = createStackNavigator(
  {
    Home,
    Details
  },
  { initialRouteName: 'Home' }
);

export default class App extends Component {
  state = {
    stock: {
      first: 1,
      second: 0,
      third: 200
    }
  };

  updateStock = id => {
    this.setState(({ stock }) => ({
      stock: {
        ...stock,
        [id]: stock[id] === 0 ? 0 : stock[id] - 1
      }
    }));
  };

  render() {
    const props = {
      ...this.state,
      updateStock: this.updateStock
    };

    return <Nav screenProps={props} />;
  }
}
