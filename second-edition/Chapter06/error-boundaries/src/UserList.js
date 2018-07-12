import React from 'react';
import { Map } from 'immutable';

// This component displays the passed-in "loading"
// property as italic text. If it's null, then
// nothing is rendered.
const LoadingMessage = ({ loading }) =>
  Map([[null, null]]).get(loading, <em>{loading}</em>);

export default ({
  error, // eslint-disable-line react/prop-types
  loading, // eslint-disable-line react/prop-types
  users // eslint-disable-line react/prop-types
}) => (
  <section>
    {/* Displays any loading messages, while
         waiting for the API... */}
    <LoadingMessage loading={loading} />

    {/* Attempts to render the user list but throws an
        error by attempting to call toUpperCase() on a number. */}
    <ul>
      {users.map(i => <li key={i.id.toUpperCase()}>{i.name}</li>)}
    </ul>
  </section>
);
