import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { Button, Input } from "react-native-elements";
import { loginFormStyles } from "../styles";

import { inject, observer } from "mobx-react";

@inject(({ loginFormStore, userStore }) => ({
  loginFormStore,
  userStore
}))
@observer
class LoginFormScreen extends React.Component {
  componentDidMount(){
    this.props.userStore.getAuth();
    }
  render() {
    const {
      loginFormStore: {
        loginValues,
        onChange,
        handleBlur,
        errors,
        onLogin,
        submitting
      }
    } = this.props;

    return (
      <View style={loginFormStyles.loginFormContainer}>
        <KeyboardAvoidingView behavior="position">
          <TextInput
            style={loginFormStyles.input}
            onChangeText={value => onChange(value, "username")}
            onBlur={value => {
              handleBlur(value, "username");
            }}
            value={loginValues.username}
          />
          {errors.username
            ? <Text style={loginFormStyles.errors}>
                {errors.username}
              </Text>
            : null}

          <TextInput
            style={loginFormStyles.input}
            secureTextEntry={true}
            onChangeText={value => onChange(value, "password")}
            onBlur={value => {
              handleBlur(value, "password");
            }}
            value={loginValues.password}
          />
          {errors.password
            ? <Text style={loginFormStyles.errors}>
                {errors.password}
              </Text>
            : null}

          <TextInput
            style={loginFormStyles.input}
            secureTextEntry={true}
            onChangeText={value => onChange(value, "repeatPassword")}
            onBlur={value => {
              handleBlur(value, "repeatPassword");
            }}
            value={loginValues.repeatPassword}
          />
          {errors.repeatPassword
            ? <Text style={loginFormStyles.errors}>
                {errors.repeatPassword}
              </Text>
            : null}
        </KeyboardAvoidingView>
        <Button
          title="Submit"
          fontSize={14}
          buttonStyle={loginFormStyles.submitStyles}
          disabled={submitting}
          disabledStyle={loginFormStyles.submitDisabled}
          onPress={onLogin}
        />
        {errors.base
          ? <Text style={loginFormStyles.errors}>
              {errors.base}
            </Text>
          : null}
      </View>
    );
  }
}

export default LoginFormScreen;
