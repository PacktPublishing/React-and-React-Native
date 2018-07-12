import React, { Component } from 'react';
import { fromJS } from 'immutable';

export default class BaseComponent extends Component {
  state = {
    data: fromJS({
      items: []
    })
  };

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // The click event handler for each item in the
  // list. The context is the lexically-bound to
  // this component.
  onClick = id => () => {
    this.data = this.data.update('items', items =>
      items.update(
        items.indexOf(items.find(i => i.get('id') === id)),
        item => item.update('done', d => !d)
      )
    );
  };

  // Renders a list of items based on the state
  // of the component. The style of the item
  // depends on the "done" property of the item.
  // Each item is assigned an event handler that
  // toggles the "done" state.
  render() {
    const { items } = this.data.toJS();

    return (
      <ul>
        {items.map(i => (
          <li
            key={i.id}
            onClick={this.onClick(i.id)}
            style={{
              cursor: 'pointer',
              textDecoration: i.done ? 'line-through' : 'none'
            }}
          >
            {i.name}
          </li>
        ))}
      </ul>
    );
  }
}
