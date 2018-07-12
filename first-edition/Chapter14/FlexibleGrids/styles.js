import { StyleSheet } from 'react-native';

// Exports a "stylesheet" that can be used
// by React Native components. The structure is
// familiar for CSS authors.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // The child elements of this container will flow
    // from left to right. The "wrap" value here will
    // make the row jump to the next row, and start
    // flowing from left to right again.
    flexWrap: 'wrap',
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
  },

  box: {
    // When there's an exact width and height for
    // a flexbox child, there's no need to "stretch" it.
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'darkslategray',
    // Margins usually work better than "space-around"
    // for grids.
    margin: 10,
  },

  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold',
  },
});

export default styles;
