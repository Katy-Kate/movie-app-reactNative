import React from "react";
import { observer, inject } from "mobx-react";
import EStyleSheet from "react-native-extended-stylesheet";
import { View, Image, Text, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import { headerStyles } from "../styles";
import { Actions } from "react-native-router-flux";

@inject("userStore")
@observer
class Header extends React.Component {
  render() {
    const { userStore } = this.props;
    const avatar = userStore.isAuth
      ? `https://secure.gravatar.com/avatar/${
          userStore.user.avatar.gravatar.hash
        }.jpg?s=64`
      : null;

    return (
      <View style={headerStyles.headerContainer}>
        <Icon
          name="filter"
          type="foundation"
          color={EStyleSheet.value("$mainLightColor")}
          onPress={() => {
            Actions.filters();
          }}
        />

        {userStore.isAuth ? (
          <View style={{ flexDirection: "row" }}>
            <Image style={headerStyles.userAvatar} source={{ uri: avatar }} />
            <TouchableHighlight onPress={userStore.logOut}>
              <View style={{ flexDirection: "column" }}>
                <Icon
                  name="arrow-right"
                  type="foundation"
                  color={EStyleSheet.value("$mainLightColor")}
                />
                <Text style={{ fontSize: 10, color: "#eee" }}>Log out</Text>
              </View>
            </TouchableHighlight>
          </View>
        ) : (
          <Icon
            name="person"
            type="Social"
            color={EStyleSheet.value("$mainLightColor")}
          />
        )}
      </View>
    );
  }
}

export default Header;
