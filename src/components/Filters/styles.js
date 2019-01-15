import { StyleSheet } from 'react-native';

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black'
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black'
  }
});

export const filtersStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'powderblue',
    marginTop: 30,
    padding: 10,
    height: 160
  },
  filters: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
    textAlign: 'center'
  }
});
