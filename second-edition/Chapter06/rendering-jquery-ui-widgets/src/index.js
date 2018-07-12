import React from 'react';
import { render } from 'react-dom';

import MyButtonContainer from './MyButtonContainer';

// Simple button event handler that changes the
// "disabled" state when clicked.
function onClick() {
  this.data = this.data.set('disabled', true);
}

render(
  <section>
    {/* A simple button with a simple label. */}
    <MyButtonContainer label="Text" />

    {/* A button with an icon, and a hidden label. */}
    <MyButtonContainer
      label="My Button"
      icon="ui-icon-person"
      showLabel={false}
    />

    {/* A button with a click event handler. */}
    <MyButtonContainer label="Disable Me" onClick={onClick} />
  </section>,
  document.getElementById('root')
);
