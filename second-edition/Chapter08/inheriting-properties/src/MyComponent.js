import React from 'react';
import { Map } from 'immutable';

import BaseComponent from './BaseComponent';

// Renders the given "text" as a header, unless
// the given "length" is 0.
const SectionHeader = ({ text, length }) =>
  Map([[0, null]]).get(length, <h1>{text}</h1>);

export default class MyComponent extends BaseComponent {
  render() {
    const { users, groups } = this.props;

    // Renders the "users" and "groups" arrays. There
    // are not property validators or default values
    // in this component, since these are declared in
    // "BaseComponent".
    return (
      <section>
        <SectionHeader text="Users" length={users.length} />
        <ul>{users.map(i => <li key={i}>{i}</li>)}</ul>

        <SectionHeader text="Groups" length={groups.length} />
        <ul>{groups.map(i => <li key={i}>{i}</li>)}</ul>
      </section>
    );
  }
}
