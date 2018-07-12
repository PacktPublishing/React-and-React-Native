import { Platform, StyleSheet, StatusBar } from 'react-native';

// Exports a "stylesheet" that can be used
// by React Native components. The structure is
// familiar for CSS authors.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },

  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold'
  }
});

export default styles;
