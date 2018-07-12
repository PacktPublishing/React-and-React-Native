import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

// The "render()" function returns a reference to the
// rendered component. In this case, it's an instance
// of "MyComponent". Now that we have the reference,
// we can call "setState()" on it whenever we want.
const myComponent = render(
  <MyComponent />,
  document.getElementById('root')
);

// After 3 seconds, set the state of "myComponent",
// which causes it to re-render itself.
setTimeout(() => {
  myComponent.setState({
    heading: 'React Awesomesauce',
    content: 'Done!'
  });
}, 3000);
