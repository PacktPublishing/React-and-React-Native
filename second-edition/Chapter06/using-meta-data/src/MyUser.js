import React, { Component } from 'react';

export default class MyUser extends Component {
  state = {
    modified: new Date(),
    first: 'First',
    last: 'Last'
  };

  // The "modified" property is used to determine
  // whether or not the component should render.
  shouldComponentUpdate(props, state) {
    return +state.modified > +this.state.modified;
  }

  render() {
    const { modified, first, last } = this.state;

    return (
      <section>
        <p>{modified.toLocaleString()}</p>
        <p>{first}</p>
        <p>{last}</p>
      </section>
    );
  }
}
