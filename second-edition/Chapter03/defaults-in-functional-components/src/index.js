import React from 'react';
import { render as renderJSX } from 'react-dom';

import MyButton from './MyButton';

function render({ second }) {
  renderJSX(
    <main>
      <MyButton />
      <MyButton text={second.text} disabled={second.disabled} />
    </main>,
    document.getElementById('root')
  );
}

render({
  second: {
    text: 'Second Button',
    disabled: true
  }
});
