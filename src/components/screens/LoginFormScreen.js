import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { loginFormStyles } from "../styles";

import { inject, observer } from "mobx-react";

@inject("loginFormStore")
@observer
class LoginFormScreen extends React.Component {
  render() {
    return (
      <View style={loginFormStyles.loginFormContainer}>
        <Button
          title="Submit"
          buttonStyle={loginFormStyles.button}
          onPress={() => {
            Actions.movies();
          }}
        />
      </View>
    );
  }
}

export default LoginFormScreen;
