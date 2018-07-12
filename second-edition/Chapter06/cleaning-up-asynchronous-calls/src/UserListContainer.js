import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { render } from 'react-dom';

import { users } from './api';
import UserList from './UserList';

// When the "cancel" link is clicked, we want to render
// a new element in "#app". This will unmount the
// "<UserListContainer>" component.
const onClickCancel = e => {
  e.preventDefault();

  render(<p>Cancelled</p>, document.getElementById('root'));
};

export default class UserListContainer extends Component {
  state = {
    data: fromJS({
      error: null,
      loading: 'loading...',
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
    // We have to store a reference to any async promises,
    // so that we can cancel them later when the component
    // is unmounted.
    this.job = users();

    this.job.then(
      result => {
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('users', fromJS(result.users));
      },

      // The "job" promise is rejected when it's cancelled.
      // This means that we need to check for the "cancelled"
      // property, because if it's true, this is normal
      // behavior.
      error => {
        if (!error.cancelled) {
          this.data = this.data
            .set('loading', null)
            .set('error', error);
        }
      }
    );
  }

  // This method is called right before the component
  // is unmounted. It is here, that we want to make sure
  // that any asynchronous behavior is cleaned up so that
  // it doesn't try to interact with an unmounted component.
  componentWillUnmount() {
    this.job.cancel();
  }

  render() {
    return (
      <UserList onClickCancel={onClickCancel} {...this.data.toJS()} />
    );
  }
}
