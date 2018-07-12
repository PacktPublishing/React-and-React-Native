import React, { Component } from 'react';

import { fetchItems } from './api';
import List from './List';

const mapItems = items =>
  items.map((value, i) => ({ key: i.toString(), value }));

class ListContainer extends Component {
  // The "source" state is empty because we need
  // to fetch the data from the API.
  state = {
    asc: true,
    filter: '',
    data: []
  };

  // When the component is first mounted, fetch the initial
  // items from the API, then
  componentDidMount() {
    fetchItems(this.state.filter, this.state.asc)
      .then(resp => resp.json())
      .then(({ items }) => {
        this.setState({ data: mapItems(items) });
      });
  }

  render() {
    return (
      <List
        data={this.state.data}
        asc={this.state.asc}
        onFilter={text => {
          // Makes an API call when the filter changes...
          fetchItems(text, this.state.asc)
            .then(resp => resp.json())
            .then(({ items }) =>
              this.setState({
                filter: text,
                data: mapItems(items)
              })
            );
        }}
        onSort={() => {
          // Makes an API call when the sort order changes...
          fetchItems(this.state.filter, !this.state.asc)
            .then(resp => resp.json())
            .then(({ items }) =>
              this.setState({
                asc: !this.state.asc,
                data: mapItems(items)
              })
            );
        }}
      />
    );
  }
}

export default ListContainer;
