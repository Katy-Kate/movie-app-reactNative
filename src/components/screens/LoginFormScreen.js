import React from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { loginFormStyles } from "../styles";

import { inject, observer } from "mobx-react";

@inject("loginFormStore")
@observer
class LoginFormScreen extends React.Component {
  render() {
    const {
      loginFormStore: { loginValues, onChange, handleBlur, errors }
    } = this.props;
    return (
      <View style={loginFormStyles.loginFormContainer}>
        <TextInput
          style={loginFormStyles.input}
          onChangeText={text => onChange(text, "username")}
          onBlur={text => {
            handleBlur(text, "username");
          }}
          value={loginValues.username}
        />
        <Text style={loginFormStyles.errors}>
          {errors.username}
        </Text>

        <TextInput
          style={loginFormStyles.input}
          secureTextEntry={true}
          onChangeText={text => onChange(text, "password")}
          onBlur={text => {
            handleBlur(text, "password");
          }}
          value={loginValues.password}
        />
        <Text style={loginFormStyles.errors}>
          {errors.password}
        </Text>

        <TextInput
          style={loginFormStyles.input}
          secureTextEntry={true}
          onChangeText={text => onChange(text, "repeatPassword")}
          onBlur={text => {
            handleBlur(text, "repeatPassword");
          }}
          value={loginValues.repeatPassword}
        />
        <Text style={loginFormStyles.errors}>
          {errors.repeatPassword}
        </Text>

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
