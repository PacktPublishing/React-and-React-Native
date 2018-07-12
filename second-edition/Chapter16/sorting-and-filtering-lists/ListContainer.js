import React, { Component } from 'react';

import List from './List';

const mapItems = items =>
  items.map((value, i) => ({ key: i.toString(), value }));

// Performs sorting and filtering on the given "data".
const filterAndSort = (data, text, asc) =>
  data
    .filter(
      i =>
        // Items that include the filter "text" are returned.
        // Unless the "text" argument is an empty string,
        // then everything is included.
        text.length === 0 || i.includes(text)
    )
    .sort(
      // Sorts either ascending or descending based on "asc".
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );

class ListContainer extends Component {
  state = {
    data: filterAndSort(
      new Array(100).fill(null).map((v, i) => `Item ${i}`),
      '',
      true
    ),
    asc: true,
    filter: ''
  };

  render() {
    return (
      <List
        data={mapItems(this.state.data)}
        asc={this.state.asc}
        onFilter={text => {
          // Updates the "filter" state, the actualy filter text,
          // and the "source" of the list. The "data" state is
          // never actually touched - "filterAndSort()" doesn't
          // mutate anything.
          this.setState({
            filter: text,
            data: filterAndSort(this.state.data, text, this.state.asc)
          });
        }}
        onSort={() => {
          this.setState({
            // Updates the "asc" state in order to change the
            // order of the list. The same principles as used
            // in the "onFilter()" handler are applied here,
            // only with diferent arguments passed to
            // "filterAndSort()"
            asc: !this.state.asc,
            data: filterAndSort(
              this.state.data,
              this.state.filter,
              !this.state.asc
            )
          });
        }}
      />
    );
  }
}

export default ListContainer;
