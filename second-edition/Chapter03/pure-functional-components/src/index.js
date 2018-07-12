import React from 'react';
import { render as renderJSX } from 'react-dom';

// "MyButton" is a function, instead of a
// "Component" subclass.
import MyButton from './MyButton';

// Renders two "MyButton" components. We only need
// the "first" and "second" properties from the
// props argument by destructuring it.
function render({ first, second }) {
  renderJSX(
    <main>
      <MyButton text={first.text} disabled={first.disabled} />
      <MyButton text={second.text} disabled={second.disabled} />
    </main>,
    document.getElementById('root')
  );
}

// Reders the components, passing in property data.
render({
  first: {
    text: 'First Button',
    disabled: false
  },
  second: {
    text: 'Second Button',
    disabled: true
  }
});
