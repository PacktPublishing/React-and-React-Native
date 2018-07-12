import React from 'react';
import { render } from 'react-dom';

import WithoutFragments from './WithoutFragments';
import WithFragments from './WithFragments';

render(
  <div>
    <WithoutFragments />
    <WithFragments />
  </div>,
  document.getElementById('root')
);
