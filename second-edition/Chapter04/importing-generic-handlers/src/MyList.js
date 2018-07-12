import React, { Component } from 'react';

// Import the generic event handler that
// manipulates the state of a component.
import reverse from './reverse';

export default class MyList extends Component {
  state = {
    items: ['Angular', 'Ember', 'React']
  };

  // Makes the generic function specific
  // to this component by calling "bind(this)".
  onReverseClick = reverse.bind(this);

  render() {
    const { state: { items }, onReverseClick } = this;

    return (
      <section>
        {/* Now we can attach the "onReverseClick" handler
             to the button, and the generic function will
             work with this component's state. */}
        <button onClick={onReverseClick}>Reverse</button>
        <ul>{items.map((v, i) => <li key={i}>{v}</li>)}</ul>
      </section>
    );
  }
}
