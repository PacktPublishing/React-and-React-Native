import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import Users from './Users';
import { fetchUsers } from './api';

export default class UsersContainer extends Component {
  // The "users" state is an empty immutable list
  // by default.
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
    // The URL and query string data we need...
    const { match: { params }, location: { search } } = this.props;

    // If the "params.desc" value is "desc", it means that
    // "desc" is a URL segment. If "search.desc" is true, it
    // means "desc" was provided as a query parameter.
    const desc =
      params.desc === 'desc' ||
      !!new URLSearchParams(search).get('desc');

    // Tell the "fetchUsers()" API to sort in descending
    // order if the "desc" value is true.
    fetchUsers(desc).then(users => {
      this.data = this.data.set('users', users);
    });
  }

  render() {
    return <Users {...this.data.toJS()} />;
  }
}

UsersContainer.propTypes = {
  params: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
