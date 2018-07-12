import React, { Component } from 'react';

import * as api from './api';
import List from './List';

class ListContainer extends Component {
  state = {
    data: [],
    asc: true,
    filter: ''
  };

  fetchItems = () =>
    api
      .fetchItems()
      .then(resp => resp.json())
      .then(({ items }) =>
        this.setState(state => ({
          data: [...state.data, ...items.map((value, i) => ({
            key: i.toString(),
            value
          }))]
        })
      );

  // Fetches the first batch of items once the
  // component is mounted.
  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return (
      <List data={this.state.data} fetchItems={this.fetchItems} />
    );
  }
}

export default ListContainer;
