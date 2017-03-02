/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { ListView } from 'react-native';

import List from './List';

// The two comparator functions we need to pass
// to the data source. The "rowHasChanged()" function
// does simple strict inequality. So does
// "sectionHeaderHasChanged()".
const rowHasChanged = (r1, r2) => r1 !== r2;
const sectionHeaderHasChanged = rowHasChanged;

// Performs sorting and filtering on the given "data".
const filterAndSort = (data, text, asc) =>
  data.filter(
    i =>
      // Items that include the filter "text" are returned.
      // Unless the "text" argument is an empty string,
      // then everything is included.
      text.length === 0 ||
      i.includes(text)
  ).sort(
    // Sorts either ascending or descending based on "asc".
    asc ?
      (a, b) => b > a ? -1 : (a === b ? 0 : 1) :
      (a, b) => a > b ? -1 : (a === b ? 0 : 1)
  );

class ListContainer extends Component {
  constructor() {
    super();

    // The initial state. The "data" is what drives
    // the list, and it's initially filtered and sorted
    // here.
    this.state = {
      data: filterAndSort(
        new Array(100)
          .fill(null)
          .map((v, i) => `Item ${i}`)
        , '', true),
      asc: true,
      filter: '',
    };

    // The "source" is also part of the component state,
    // but it's based on "state.data", which is why it's
    // set here. This is the data source that's ultimately
    // used by the "<ListView>".
    this.state.source = new ListView
      .DataSource({
        rowHasChanged,
        sectionHeaderHasChanged,
      })
      .cloneWithRows(this.state.data);
  }

  render() {
    return (
      <List
        source={this.state.source}
        asc={this.state.asc}
        onFilter={(text) => {
          // Updates the "filter" state, the actualy filter text,
          // and the "source" of the list. The "data" state is
          // never actually touched - "filterAndSort()" doesn't
          // mutate anything.
          this.setState({
            filter: text,
            source: this.state.source.cloneWithRows(
              filterAndSort(
                this.state.data,
                text,
                this.state.asc
              )
            ),
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
            source: this.state.source.cloneWithRows(
              filterAndSort(
                this.state.data,
                this.state.filter,
                !this.state.asc
              )
            ),
          });
        }}
      />
    );
  }
}

export default ListContainer;
