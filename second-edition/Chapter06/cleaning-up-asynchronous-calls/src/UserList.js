import React from 'react';
import { Map } from 'immutable';

// This component displays the passed-in "error"
// property as bold text. If it's null, then
// nothing is rendered.
const ErrorMessage = ({ error }) =>
  Map([[null, null]]).get(error, <strong>{error}</strong>);

// This component displays the passed-in "loading"
// property as italic text. If it's null, then
// nothing is rendered.
const LoadingMessage = ({ loading }) =>
  Map([[null, null]]).get(loading, <em>{loading}</em>);

const CancelLink = ({ loading, onClick }) =>
  Map([[null, null]]).get(
    loading,
    <a href="#cancel" onClick={onClick}>
      Cancel
    </a> // eslint-disable-line jsx-a11y/href-no-hash
  );

export default ({
  error, // eslint-disable-line react/prop-types
  loading, // eslint-disable-line react/prop-types
  users, // eslint-disable-line react/prop-types
  onClickCancel // eslint-disable-line react/prop-types
}) => (
  <section>
    {/* Displays any error messages... */}
    <ErrorMessage error={error} />

    {/* Displays any loading messages, while
         waiting for the API... */}
    <LoadingMessage loading={loading} />

    {/* Renders the user list... */}
    <ul>{users.map(i => <li key={i.id}>{i.name}</li>)}</ul>

    <CancelLink loading={loading} onClick={onClickCancel} />
  </section>
);
