import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $mainColor: 'powderblue',
  $mainLightColor: 'skyblue',
  $mainDarkColor: '#073356',
  $white: '#ffffff',
  $black: '#000000'
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
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
