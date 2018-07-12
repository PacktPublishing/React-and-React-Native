import React from 'react';
import { render } from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

const users = ['User 1', 'User 2'];

const groups = ['Group 1', 'Group 2'];

render(
  <section>
    {/* Renders as expected, using the defaults. */}
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>

    {/* Renders as expected, using the "groups" default. */}
    <ErrorBoundary>
      <MyComponent users={users} />
      <hr />
    </ErrorBoundary>

    {/* Renders as expected, using the "users" default. */}
    <ErrorBoundary>
      <MyComponent groups={groups} />
      <hr />
    </ErrorBoundary>

    {/* Renders as expected, providing property values. */}
    <ErrorBoundary>
      <MyComponent users={users} groups={groups} />
    </ErrorBoundary>

    {/* Fails to render, the property validators in the base
         component detect the invalid number type. */}
    <ErrorBoundary>
      <MyComponent users={0} groups={0} />
    </ErrorBoundary>
  </section>,
  document.getElementById('root')
);
