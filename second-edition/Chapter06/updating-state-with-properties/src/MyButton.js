import React from 'react';

export default ({
  clicks, // eslint-disable-line react/prop-types
  disabled, // eslint-disable-line react/prop-types
  text, // eslint-disable-line react/prop-types
  onClick // eslint-disable-line react/prop-types
}) => (
  <section>
    {/* Renders the number of button clicks,
         using the "clicks" property. */}
    <p>{clicks} clicks</p>

    {/* Renders the button. It's disabled state
         is based on the "disabled" property, and
         the "onClick()" handler comes from the
         container component. */}
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  </section>
);
