import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'ghostwhite'
  },

  // The outtermost container, needs a height.
  pickerHeight: {
    height: 300
  },

  // The inner container lays out the picker
  // components and sets the background color.
  pickerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'white',
    padding: 6,
    height: 240
  },

  pickerLabel: {
    fontSize: 14,
    fontWeight: 'bold'
  },

  picker: {
    width: 100,
    backgroundColor: 'white'
  },

  selection: {
    width: 200,
    marginTop: 230,
    textAlign: 'center'
  }
});
