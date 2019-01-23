import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { filtersStyles } from "../styles";
import PrimaryReleaseYear from "../Filters/PrimaryReleaseYear";
import SortBy from "../Filters/SortBy";
import { loginFormStyles, WIDTH_SCREEN } from "../styles";

import { inject, observer } from "mobx-react";
import { Actions } from "react-native-router-flux";

@inject(({ moviesPageStore }) => ({
  moviesPageStore
}))
@observer
class FiltersScreen extends React.Component {
  render() {
    return (
      <View style={filtersStyles.wrapper}>
        <View>
          <Text style={filtersStyles.title}>Фильтры:</Text>
        </View>
        <View style={filtersStyles.filters}>
          <SortBy />
          <PrimaryReleaseYear />
          <Button
            buttonStyle={loginFormStyles.submitStyles}
            title="show movies"
            onPress={() => {
              Actions.movies();
            }}
          />
        </View>
      </View>
    );
  }
}
export default FiltersScreen;
