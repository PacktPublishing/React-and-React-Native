import { StyleSheet } from 'react-native';

// Exports a "stylesheet" that can be used
// by React Native components. The structure is
// familiar for CSS authors.
const styles = StyleSheet.create({

  // The "container" for the whole screen.
  container: {
    // Enables the flexbox layout model...
    flex: 1,
    // Tells the flexbox to render children from
    // top to bottom...
    flexDirection: 'column',
    // Aligns children to the center on the container...
    alignItems: 'center',
    // Defines the spacing relative to other children...
    justifyContent: 'space-around',
    backgroundColor: 'ghostwhite',
  },

  box: {
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'darkslategray',
  },

  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold',
  },
});

export default styles;
