import { Platform, StyleSheet, StatusBar } from 'react-native';

// Exports a "stylesheet" that can be used
// by React Native components. The structure is
// familiar for CSS authors.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'space-around',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },

  box: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'darkslategray',
    backgroundColor: 'lightgray'
  },

  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold'
  },

  // A "row" flexs from left-to-right...
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  },

  // A "column" flexes from top-to-bottom...
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  }
});

export default styles;
