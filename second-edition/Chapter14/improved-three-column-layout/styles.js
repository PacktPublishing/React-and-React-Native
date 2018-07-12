import { Platform, StyleSheet, StatusBar } from 'react-native';

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
    justifyContent: 'center',
    // Instead of given the flexbox child a width, we
    // tell it to "stretch" to fill all available space.
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'darkslategray'
  },

  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold'
  }
});

export default styles;
