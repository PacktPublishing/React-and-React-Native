import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Imports the "ProgressBarComponent" which is the
// actual react-native implementation. The actual
// component that's imported is platform-specific.
// The custom props in "progressProps" is also
// platform-specific.
import {
  ProgressBarComponent,
  progressProps
} from './ProgressBarComponent'; // eslint-disable-line import/no-unresolved

import styles from './styles';

// The "ProgressLabel" component determines what to
// render as a label, based on the boolean "label"
// prop. If true, then we render some text that shows
// the progress percentage. If false, we render nothing.
const ProgressLabel = ({ show, progress }) =>
  new Map([
    [
      true,
      <Text style={styles.progressText}>
        {Math.round(progress * 100)}%
      </Text>
    ],
    [false, null]
  ]).get(show);

// Our generic progress bar component...
const ProgressBar = ({ progress, label }) => (
  <View style={styles.progress}>
    <ProgressLabel show={label} progress={progress} />
    {/* "<ProgressBarComponent>" is really a ""<ProgressViewIOS>"
         or a "<ProgressBarAndroid>". */}
    <ProgressBarComponent
      {...progressProps}
      style={styles.progress}
      progress={progress}
    />
  </View>
);

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  label: PropTypes.bool.isRequired
};

ProgressBar.defaultProps = {
  progress: 0,
  label: true
};

export default ProgressBar;
