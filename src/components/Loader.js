import React from 'react';
import { StyleSheet, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Spinner from 'react-native-loading-spinner-overlay';

const styles = StyleSheet.create({
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

const Loader = () =>
  <View style={styles.container}>
    <Spinner
      visible
      textContent={'Loading...'}
      textStyle={styles.spinnerTextStyle}
    />
  </View>;

export default Loader;
