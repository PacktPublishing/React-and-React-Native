import React, { Component } from 'react';
import { fromJS } from 'immutable';

import FilteredList from './FilteredList';

class FilteredListContainer extends Component {
  // Controls the state of the the filter buttons
  // as well as the state of the function that
  // filters the item list.
  state = {
    data: fromJS({
      // The items...
      items: [
        { name: 'First item', done: false },
        { name: 'Second item', done: false },
        { name: 'Third item', done: false }
      ],

      // The filter button states...
      todoFilter: true,
      doneFilter: false,
      allFilter: false,

      // The default filter...
      filter: i => !i.done,

      // The "todo" filter button was clicked.
      todoClick: () => {
        this.data = this.data.merge({
          todoFilter: true,
          doneFilter: false,
          allFilter: false,
          filter: i => !i.done
        });
      },

      // The "done" filter button was clicked.
      doneClick: () => {
        this.data = this.data.merge({
          todoFilter: false,
          doneFilter: true,
          allFilter: false,
          filter: i => i.done
        });
      },

      // The "all" filter button was clicked.
      allClick: () => {
        this.data = this.data.merge({
          todoFilter: false,
          doneFilter: false,
          allFilter: true,
          filter: () => true
        });
      },

      // When the item is clicked, toggle it's
      // "done" state.
      itemClick: item => e => {
        e.preventDefault();

        this.data = this.data.update('items', items =>
          items.update(
            items.findIndex(i => i.get('name') === item.name),
            i => i.update('done', done => !done)
          )
        );
      }
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

  render() {
    return <FilteredList {...this.state.data.toJS()} />;
  }
}

export default FilteredListContainer;
