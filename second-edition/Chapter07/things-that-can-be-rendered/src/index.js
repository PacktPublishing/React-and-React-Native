import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

// Two React elements we'll use to pass to
// "<MyComponent>" as property values.
const myHeader = <h1>My Header</h1>;
const myContent = <p>My Content</p>;

render(
  <section>
    {/* Renders as expected, both properties are passed
         React elements as values. */}
    <MyComponent {...{ myHeader, myContent }} />

    {/* Triggers a warning because "myHeader" is expecting
         a React element instead of a string. */}
    <MyComponent myHeader="My Header" {...{ myContent }} />

    {/* Renders as expected. A string is a valid type for
         the "myContent" property. */}
    <MyComponent {...{ myHeader }} myContent="My Content" />

    {/* Renders as expected. An array of React elements
         is a valid type for the "myContent" property. */}
    <MyComponent
      {...{ myHeader }}
      myContent={[myContent, myContent, myContent]}
    />
  </section>,
  document.getElementById('root')
);
