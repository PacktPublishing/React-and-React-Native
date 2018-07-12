import React from 'react';

// The functional component doesn't care if the property
// values are the defaults, or if they're passed in from
// JSX. The result is the same.
const MyButton = ({ disabled, text }) => (
  <button disabled={disabled}>{text}</button>
);

// The "MyButton" constant was created so that we could
// attach the "defaultProps" metadata here, before
// exporting it.
MyButton.defaultProps = {
  text: 'My Button',
  disabled: false
};

export default MyButton;
