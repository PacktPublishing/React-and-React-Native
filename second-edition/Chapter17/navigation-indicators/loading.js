import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

// Wraps the "Wrapped" component with a stateful component
// that renders an "<ActivityIndicator>" when the "loading"
// state is true.
const loading = Wrapped =>
  class LoadingWrapper extends Component {
    static propTypes = {
      promise: PropTypes.instanceOf(Promise)
    };

    state = {
      loading: true
    };

    // Adds a callback to the "promise" that was
    // passed in. When the promise resolves, we set
    // the "loading" state to false.
    componentDidMount() {
      this.props.promise.then(
        () => this.setState({ loading: false }),
        () => this.setState({ loading: false })
      );
    }

    // If "loading" is true, render the "<ActivityIndicator>"
    // component. Otherwise, render the "<Wrapped>" component.
    render() {
      return new Map([
        [
          true,
          <View style={styles.container}>
            <ActivityIndicator size="large" />
          </View>
        ],
        [false, <Wrapped {...this.props} />]
      ]).get(this.state.loading);
    }
  };

export default loading;
