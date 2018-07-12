import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

render(
  <section>
    {/* Works as expected. */}
    <MyComponent level={10} user={{ name: 'Name', age: 32 }} />

    {/* Works as expected, the "online"
         property is ignored. */}
    <MyComponent user={{ name: 'Name', age: 32, online: false }} />

    {/* Fails. The "level" value is out of range,
         and the "age" property is expecting a
         number, not a string. */}
    <MyComponent level={11} user={{ name: 'Name', age: '32' }} />
  </section>,
  document.getElementById('root')
);
