import EStyleSheet from 'react-native-extended-stylesheet';
let Color = require('color');

EStyleSheet.build({
  $mainColor: 'powderblue',
  $mainLightColor: 'skyblue',
  $mainDarkColor: '#073356',

  $white: '#ffffff',
  $black: '#000000',
  $errors: 'red'
});

export const btnStyle = EStyleSheet.create({
  btnLight: {
    backgroundColor: '$mainLightColor',
    color: '$black',
    fontSize: 16,
    borderRadius: 30,
    borderColor: '$white'
  }
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
    borderRadius: 7,
    color: '$mainColor',
    borderColor: () => Color(EStyleSheet.value('$mainDarkColor')).darken(0.5),
    borderWidth: 0.3
  },
  button: {
    backgroundColor: () =>
      Color(EStyleSheet.value('$mainDarkColor')).darken(0.5),
    width: 300,
    height: 45,
    marginTop: 10,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 7
  },
  errors: {
    width: 300,
    paddingHorizontal: 5,
    alignContent: 'flex-start',
    color: '$errors',
    fontSize: 8
  }
});
