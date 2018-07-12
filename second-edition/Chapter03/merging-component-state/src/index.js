import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

// Stores a reference to the rendered component...
const myComponent = render(
  <MyComponent />,
  document.getElementById('root')
);

// Change part of the state after 1 second...
setTimeout(() => {
  myComponent.setState({ first: 'done!' });
}, 1000);

// Change another part of the state after 2 seconds...
setTimeout(() => {
  myComponent.setState({ second: 'done!' });
}, 2000);

// Change another part of the state after 3 seconds...
setTimeout(() => {
  myComponent.setState({ third: 'done!' });
}, 3000);

// Change another part of the state after 4 seconds...
setTimeout(() => {
  myComponent.setState(state => ({
    ...state,
    fourth: state.doneMessage
  }));
}, 4000);
