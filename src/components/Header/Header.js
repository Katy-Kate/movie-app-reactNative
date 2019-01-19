import React from "react";
import { observer, inject } from "mobx-react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Button, Input } from "react-native-elements";
import { headerStyles } from "../styles";
import { Actions } from "react-native-router-flux";

@inject("userStore")
@observer
class Header extends React.Component {
  render() {
    const { userStore } = this.props;
    const avatar = `https://secure.gravatar.com/avatar/${userStore.user.avatar
      .gravatar.hash}.jpg?s=64`;

    return (
      <View style={headerStyles.headerContainer}>
        <Icon
          name="filter"
          type="foundation"
          color="#517fa4"
          onPress={() => {
            Actions.filters();
          }}
        />
        <Image style={headerStyles.userAvatar} source={{ uri: avatar }} />
      </View>
    );
  }
}

export default Header;
