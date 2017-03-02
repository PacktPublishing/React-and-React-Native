import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Tells the child elements to flex from left to right...
    flexDirection: 'row',
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  box: {
    // There's no height, so "box" elements will stretch
    // from top to bottom.
    width: 100,
    justifyContent: 'center',
    alignSelf: 'stretch',
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
