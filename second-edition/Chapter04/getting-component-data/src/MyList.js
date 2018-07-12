import React, { Component } from 'react';

export default class MyList extends Component {
  constructor() {
    super();

    // We want to make sure that the "onClick()"
    // handler is explicitly bound to this component
    // as it's context.
    this.onClick = this.onClick.bind(this);
  }

  // When a list item is clicked, look up the name
  // of the item based on the "id" argument. This is
  // why we need access to the component through "this",
  // for the properties.
  onClick(id) {
    const { name } = this.props.items.find(i => i.id === id);
    console.log('clicked', `"${name}"`);
  }

  render() {
    return (
      <ul>
        {/* Creates a new handler function with
            the bound "id" argument. Notice that
            the context is left as null, since that
            has already been bound in the
            constructor. */}
        {this.props.items.map(({ id, name }) => (
          <li key={id} onClick={this.onClick.bind(null, id)}>
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
