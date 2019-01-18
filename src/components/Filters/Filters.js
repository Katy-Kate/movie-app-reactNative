import React from "react";
import { View, Text } from "react-native";
import { filtersStyles } from "../styles";
import PrimaryReleaseYear from "./PrimaryReleaseYear";
import SortBy from "./SortBy";

import { inject, observer } from "mobx-react";

@inject(({ moviesPageStore }) => ({
  moviesPageStore
}))
@observer
class Filters extends React.Component {
  render() {
    return (
      <View style={filtersStyles.wrapper}>
        <View>
          <Text style={filtersStyles.title}>Фильтры:</Text>
        </View>
        <View style={filtersStyles.filters}>
          <SortBy />
          <PrimaryReleaseYear />
        </View>
      </View>
    );
  }
}
export default Filters;
