import React, { Component } from 'react';
import { ListView } from 'react-native';

// Note that we're importing mock here to enable the API.
import './mock';
import List from './List';

const rowHasChanged = (r1, r2) => r1 !== r2;
const sectionHeaderHasChanged = rowHasChanged;

// Fetches items from the API using
// the given "filter" and "asc" arguments. The
// returned promise resolves a JavaScript object.
const fetchItems = (filter, asc) =>
  fetch(`/items?filter=${filter}&asc=${+asc}`)
    .then(resp => resp.json());

class ListContainer extends Component {
  constructor() {
    super();

    // The "source" state is empty because we need
    // to fetch the data from the API.
    this.state = {
      // data: [],
      asc: true,
      filter: '',
      source: new ListView
        .DataSource({
          rowHasChanged,
          sectionHeaderHasChanged,
        })
        .cloneWithRows([]),
    };
  }

  // When the component is first mounted, fetch the initial
  // items from the API, then
  componentDidMount() {
    fetchItems(this.state.filter, this.state.asc)
      .then(({ items }) => {
        this.setState({
          source: this.state.source.cloneWithRows(items),
        });
      });
  }

  render() {
    return (
      <List
        source={this.state.source}
        asc={this.state.asc}
        onFilter={(text) => {
          // Makes an API call when the filter changes...
          fetchItems(text, this.state.asc)
            .then(({ items }) =>
              this.setState({
                filter: text,
                source: this.state.source.cloneWithRows(items),
              }));
        }}
        onSort={() => {
          // Makes an API call when the sort order changes...
          fetchItems(this.state.filter, !this.state.asc)
            .then(({ items }) =>
              this.setState({
                asc: !this.state.asc,
                source: this.state.source.cloneWithRows(items),
              }));
        }}
      />
    );
  }
}

export default ListContainer;
