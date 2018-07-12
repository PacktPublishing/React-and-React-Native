import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

render(
  <section>
    {/* Passes a string and two numbers to
         "<MyComponent>". Everything works as
         expected. */}
    <MyComponent label="Regular Values" max={20} value={10} />

    {/* Passes strings instead of numbers to the
         progress bar, but they're correctly
         interpreted as numbers. */}
    <MyComponent label="String Values" max="20" value="10" />

    {/* The "label" has no issue displaying
         "MAX_SAFE_INTEGER", but the date that's
         passed to "max" causes the progress bar
         to break. */}
    <MyComponent
      label={Number.MAX_SAFE_INTEGER}
      max={new Date()}
      value="10"
    />
  </section>,
  document.getElementById('root')
);
