import React from "react";
import { observer, inject } from "mobx-react";
import { View, Image, Text, StyleSheet } from "react-native";
import { headerStyles } from "../styles";

@inject("userStore")
@observer
class Header extends React.Component {
  render() {
    const { userStore } = this.props;
    const avatar = `https://secure.gravatar.com/avatar/${userStore.user.avatar
      .gravatar.hash}.jpg?s=64`;

    return (
      <View style={headerStyles.headerContainer}>
        <Image style={headerStyles.userAvatar} source={{ uri: avatar }} />
      </View>
    );
  }
}

export default Header;
