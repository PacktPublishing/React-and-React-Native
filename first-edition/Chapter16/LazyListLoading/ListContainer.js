import React, { Component } from 'react';
import { ListView } from 'react-native';

import './mock';
import List from './List';

const rowHasChanged = (r1, r2) => r1 !== r2;
const sectionHeaderHasChanged = rowHasChanged;

class ListContainer extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      asc: true,
      filter: '',
      source: new ListView
        .DataSource({
          rowHasChanged,
          sectionHeaderHasChanged,
        })
        .cloneWithRows([]),
    };

    // This function is passed to the "enEndReached"
    // property of the React Native "ListView" component.
    // Instead of replacing the "source", it concatenates
    // the new items with those that have already loaded.
    this.fetchItems = () =>
      fetch('/items')
        .then(resp => resp.json())
        .then(({ items }) =>
          this.setState({
            data: this.state.data.concat(items),
            source: this.state.source.cloneWithRows(
              this.state.data
            ),
          })
        );
  }

  // Fetches the first batch of items once the
  // component is mounted.
  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return (
      <List
        source={this.state.source}
        fetchItems={this.fetchItems}
      />
    );
  }
}

export default ListContainer;
