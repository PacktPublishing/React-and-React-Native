import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

// Renders "error" text, unless "error" is
// null - then nothing is rendered.
const Error = ({ error }) =>
  Map([[null, null]]).get(
    error,
    <p>
      <strong>{error}</strong>
    </p>
  );

// Renders "children" text, unless "children"
// is null - then nothing is rendered.
const Text = ({ children }) =>
  Map([[null, null]]).get(children, <p>{children}</p>);

const User = ({ error, first, last, age }) => (
  <section>
    {/* If there's an API error, display it. */}
    <Error error={error} />

    {/* If there's a first, last, or age value,
         display it. */}
    <Text>{first}</Text>
    <Text>{last}</Text>
    <Text>{age}</Text>
  </section>
);

// Every property is optional, since we might
// have have to render them.
User.propTypes = {
  error: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  age: PropTypes.number
};

export default User;
