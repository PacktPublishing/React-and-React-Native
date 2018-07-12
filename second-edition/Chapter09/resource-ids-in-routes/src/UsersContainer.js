import React, { Component } from 'react';
import { fromJS } from 'immutable';

import Users from './Users';
import { fetchUsers } from './api';

export default class UsersContainer extends Component {
  state = {
    data: fromJS({
      users: []
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

  componentDidMount() {
    fetchUsers().then(users => {
      this.data = this.data.set('users', users);
    });
  }

  render() {
    return <Users {...this.data.toJS()} />;
  }
}
