import React from 'react';
import { Provider } from 'mobx-react';
import { moviesPageStore } from '../stores/moviesPageStore';
import { loginFormStore } from '../stores/loginFormStore';
import { userStore } from '../stores/userStore';
import { Router, Stack, Scene } from 'react-native-router-flux';
import MoviesScreen from './screens/MoviesScreen';
import LoginFormScreen from './screens/LoginFormScreen';

class Root extends React.Component {
  render () {
    return (
      <Provider
        moviesPageStore={moviesPageStore}
        loginFormStore={loginFormStore}
        userStore={userStore}
      >
        <Router>
          <Stack key='root'>
            <Scene
              hideNavBar
              key='loginform'
              component={LoginFormScreen}
              title='Login'
            />
            <Scene
              hideNavBar
              key='movies'
              component={MoviesScreen}
              title='Movies'
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default Root;
