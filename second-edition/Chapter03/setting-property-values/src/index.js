import React from 'react';
import { render as renderJSX } from 'react-dom';

// The two components we're to pass props to
// when they're rendered.
import MyButton from './MyButton';
import MyList from './MyList';

// This is the "application state". This data changes
// over time, and we can pass the application data to
// components as properties.
const appState = {
  text: 'My Button',
  disabled: true,
  items: ['First', 'Second', 'Third']
};

// Defines our own "render()" function. The "renderJSX()"
// function is from "react-dom" and does the actual
// rendering. The reason we're creating our own "render()"
// function is that it contains the JSX that we want to
// render, and so we can call it whenever there's new
// application data.
function render(props) {
  renderJSX(
    <main>
      {/* The "MyButton" component relies on the "text"
           and the "disabed" property. The "text" property
           is a string while the "disabled" property is a
           boolean. */}
      <MyButton text={props.text} disabled={props.disabled} />

      {/* The "MyList" component relies on the "items"
           property, which is an array. Any valid
           JavaScript data can be passed as a property. */}
      <MyList items={props.items} />
    </main>,
    document.getElementById('root')
  );
}

// Performs the initial rendering...
render(appState);

// After 1 second, changes some application data, then
// calls "render()" to re-render the entire structure.
setTimeout(() => {
  appState.disabled = false;
  appState.items.push('Fourth');

  render(appState);
}, 1000);
