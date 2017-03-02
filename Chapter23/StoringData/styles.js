import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
    paddingTop: 20,
  },

  input: {
    height: 35,
    backgroundColor: 'white',
    marginBottom: 10,
  },

  list: {
    height: 450,
  },

  controls: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 20,
  },

  button: {
    padding: 10,
    margin: 5,
    backgroundColor: 'azure',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'slategrey',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'slategrey',
  },
});
