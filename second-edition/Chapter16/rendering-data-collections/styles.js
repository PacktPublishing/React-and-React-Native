import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // Flexing from top to bottom gives the
    // container a height, which is necessary
    // to enable scrollable content.
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },

  item: {
    margin: 5,
    padding: 5,
    color: 'slategrey',
    backgroundColor: 'ghostwhite',
    textAlign: 'center',
  },
});
