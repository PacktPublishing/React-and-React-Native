import React, { Component } from 'react';
import { fromJS } from 'immutable';

import { users } from './api';
import UserList from './UserList';

class UserListContainer extends Component {
  state = {
    data: fromJS({
      error: null,
      users: [],
    }),
  }

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // Called before the component is mounted into the DOM
  // for the first time.
  componentWillMount() {
    // Since the component hasn't been mounted yet, it's
    // safe to change the state by calling "setState()"
    // without causing the component to re-render.
    this.data = this.data
      .set('loading', this.props.loading); // eslint-disable-line react/prop-types
  }

  // When component has been rendered, "componentDidMount()"
  // is called. This is where we should perform asynchronous
  // behavior that will change the state of the component.
  // In this case, we're fetching a list of users from
  // the mock API.
  componentDidMount() {
    users().then(
      (result) => {
        // Populate the "users" state, but also
        // make sure the "error" and "loading"
        // states are cleared.
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('users', fromJS(result.users));
      },
      (error) => {
        // When an error occurs, we want to clear
        // the "loading" state and set the "error"
        // state.
        this.data = this.data
          .set('loading', null)
          .set('error', error);
      }
    );
  }

  render() {
    return (
      <UserList {...this.data.toJS()} />
    );
  }
}

UserListContainer.defaultProps = {
  loading: 'loading...',
};

export default UserListContainer;
