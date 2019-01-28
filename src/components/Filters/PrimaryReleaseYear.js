import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";
import { pickerSelectStyles } from "../styles";

import { inject, observer } from "mobx-react";

@inject(({ moviesPageStore }) => ({
  moviesPageStore
}))
@observer
class PrimaryReleaseYear extends React.Component {
  static defaultProps = {
    options: [
      {
        label: "Все фильмы",
        value: "0"
      },
      {
        value: "2018",
        label: "2018"
      },
      {
        value: "2005",
        label: "2005"
      },
      {
        value: "1991",
        label: "1991"
      }
    ]
  };
  render() {
    const {
      moviesPageStore: { onChangeFilters, filters },
      options
    } = this.props;
    return (
      <RNPickerSelect
        items={options}
        placeholder={{}}
        style={{ ...pickerSelectStyles }}
        value={filters.primary_release_year}
        onValueChange={value => {
          onChangeFilters({ target: { name: "primary_release_year", value } });
        }}
      />
    );
  }
}
export default PrimaryReleaseYear;
