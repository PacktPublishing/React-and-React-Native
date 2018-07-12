// Exports the "ProgressBarAndroid" component as
// "ProgressBarComponent" that our "ProgressBar"
// expects.
export {
  ProgressBarAndroid as ProgressBarComponent,
} from 'react-native';

// The "styleAttr" and "indeterminate" props are
// necessary to make "ProgressBarAndroid" look like
// "ProgressViewIOS".
export const progressProps = {
  styleAttr: 'Horizontal',
  indeterminate: false,
};
