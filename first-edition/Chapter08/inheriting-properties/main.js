import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

const users = [
  'User 1',
  'User 2',
];

const groups = [
  'Group 1',
  'Group 2',
];

render((
  <section>
    { /* Renders as expected, using the defaults. */ }
    <MyComponent />

    { /* Renders as expected, using the "groups" default. */ }
    <MyComponent users={users} />
    <hr />

    { /* Renders as expected, using the "users" default. */ }
    <MyComponent groups={groups} />
    <hr />

    { /* Renders as expected, providing property values. */ }
    <MyComponent users={users} groups={groups} />

    { /* Fails to render, the property validators in the base
         component detect the invalid number type. */ }
    <MyComponent users={0} groups={0} />
  </section>
  ),
  document.getElementById('app')
);
