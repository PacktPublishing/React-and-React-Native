import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';
import MyUser from './MyUser';

// The "myUsers" property is expecting
// an array of "MyUser" instances.
const users = [
  new MyUser('First1', 'Last1'),
  new MyUser('First2', 'Last2'),
  new MyUser('First3', 'Last3')
];

render(
  <section>
    {/* Works as expected. */}
    <MyComponent myDate={new Date()} myCount={0} myUsers={users} />

    {/* All property values fail to validate. */}
    <MyComponent
      myDate="6/9/2016"
      myCount={false}
      myUsers={[1, 2, 3]}
    />
  </section>,
  document.getElementById('root')
);
