import React from 'react';
import { render } from 'react-dom';

// Imports our two components that render children...
import MySection from './MySection';
import MyButton from './MyButton';

// Renders the "MySection" element, which has a child
// component of "MyButton", which in turn has child text.
render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>,
  document.getElementById('root')
);
