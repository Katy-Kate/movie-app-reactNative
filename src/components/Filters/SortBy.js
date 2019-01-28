import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { pickerSelectStyles } from "../styles";
import { StyleSheet } from "react-native";

import { inject, observer } from "mobx-react";

@inject(({ moviesPageStore }) => ({
  moviesPageStore
}))
@observer
class SortBy extends React.Component {
  static defaultProps = {
    options: [
      {
        value: "popularity.desc",
        label: "Популярные по убыванию"
      },
      {
        value: "popularity.asc",
        label: "Популярные по возростанию"
      },
      {
        value: "vote_average.desc",
        label: "Рейтинг по убыванию"
      },
      {
        value: "vote_average.asc",
        label: "Рейтинг по возростанию"
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
        value={filters.sort_by}
        onValueChange={value => {
          onChangeFilters({ target: { name: "sort_by", value } });
        }}
      />
    );
  }
}
export default SortBy;
