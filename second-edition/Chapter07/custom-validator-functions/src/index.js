import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

render(
  <section>
    {/* Renders as expected... */}
    <MyComponent
      myArray={['first', 'second', 'third']}
      myNumber={99}
    />

    {/* Both custom validators fail... */}
    <MyComponent myArray={[]} myNumber={100} />
  </section>,
  document.getElementById('root')
);
