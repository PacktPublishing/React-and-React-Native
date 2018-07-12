import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import User from './User';
import { fetchUser } from './api';

export default class UserContainer extends Component {
  state = {
    data: fromJS({
      error: null,
      first: null,
      last: null,
      age: null
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
    // The dynamic URL segment we're interested in, "id",
    // is stored in the "params" property.
    const { match: { params: { id } } } = this.props;

    // Fetches a user based on the "id". Note that it's
    // converted to a number first.
    fetchUser(+id).then(
      // If the user was successfully fetched, then
      // merge the user properties into the state. Also,
      // make sure that "error" is cleared.
      user => {
        this.data = this.data.merge(user, { error: null });
      },

      // If the user fetch failed, set the "error" state
      // to the resolved error value. Also, make sure the
      // other user properties are restored to their defaults
      // since the component is now in an error state.
      error => {
        this.data = this.data.merge({
          error,
          first: null,
          last: null,
          age: null
        });
      }
    );
  }

  render() {
    return <User {...this.data.toJS()} />;
  }
}

// Params should always be there...
UserContainer.propTypes = {
  match: PropTypes.object.isRequired
};
