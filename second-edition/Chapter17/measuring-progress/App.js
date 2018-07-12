import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import ProgressBar from './ProgressBar';

export default class MeasuringProgress extends Component {
  // Initially at 0% progress. Changing this state
  // updates the progress bar.
  state = {
    progress: 0
  };

  componentDidMount() {
    // Continuously increments the "progress" state
    // every 300MS, until we're at 100%.
    const updateProgress = () => {
      this.setState({
        progress: this.state.progress + 0.01
      });

      if (this.state.progress < 1) {
        setTimeout(updateProgress, 300);
      }
    };

    updateProgress();
  }

  render() {
    return (
      <View style={styles.container}>
        {/* This is awesome. A simple generic
             "<ProgressBar>" component that works
             on Android and on iOS. */}
        <ProgressBar progress={this.state.progress} />
      </View>
    );
  }
}
