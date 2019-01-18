import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
let Color = require('color');

EStyleSheet.build({
  $mainColor: 'powderblue',
  $mainLightColor: 'skyblue',
  $mainDarkColor: '#073356',

  $white: '#ffffff',
  $black: '#000000',
  $errors: 'red',

  $fontSise: 14,

  $borderRadiusButton: 7
});

export const loader = EStyleSheet.create({
  spinnerTextStyle: {
    color: '$white'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$mainDarkColor'
  }
});

export const loginFormStyles = EStyleSheet.create({
  loginFormContainer: {
    backgroundColor: '$mainDarkColor',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: 300,
    height: 45,
    marginTop: 6,
    paddingHorizontal: 5,
    backgroundColor: () =>
      Color(EStyleSheet.value('$mainDarkColor')).darken(0.3),
    borderRadius: '$borderRadiusButton',
    color: '$mainColor',
    borderColor: () => Color(EStyleSheet.value('$mainDarkColor')).darken(0.5),
    borderWidth: 0.3,
    fontSize: '$fontSise'
  },

  submitStyles: {
    backgroundColor: () =>
      Color(EStyleSheet.value('$mainDarkColor')).darken(0.5),
    width: 300,
    height: 45,
    marginTop: 10,
    borderRadius: '$borderRadiusButton',
    fontSize: '$fontSise'
  },

  submitDisabled: {
    backgroundColor: () =>
      Color(EStyleSheet.value('$mainDarkColor')).lighten(0.5)
  },

  errors: {
    width: 300,
    paddingHorizontal: 5,
    alignContent: 'flex-start',
    color: '$errors',
    fontSize: () => 0.7 * EStyleSheet.value('$fontSise')
  }
});

export const headerStyles = EStyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '$mainDarkColor',
    width: '100%'
  },

  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50
  }
});

export const pickerSelectStyles = {
  inputIOS: {
    fontSize: 8,
    paddingTop: 3,
    paddingHorizontal: 10,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: 'gray',
    height: 30
  },

  inputAndroid: {
    paddingTop: 3,
    paddingHorizontal: 10,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: 'gray',
    height: 30
  }
};

export const filtersStyles = EStyleSheet.create({
  wrapper: {
    backgroundColor: 'powderblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 100
  },

  filters: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  title: {
    fontSize: () => 1.3 * EStyleSheet.value('$fontSise'),
    color: '$mainDarkColor',
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: '300'
  }
});

export const cardMovieStyles = EStyleSheet.create({
  cardMovie: {
    borderRadius: '$borderRadiusButton',
    overflow: 'hidden'
  },

  cardMovieTitle: {
    fontSize: () => 1.7 * EStyleSheet.value('$fontSise'),
    color: '$mainDarkColor',
    fontWeight: '500'
  },

  imageMovie: {
    borderTopRightRadius: '$borderRadiusButton',
    borderTopLeftRadius: '$borderRadiusButton'
  }
});
