import React from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import Loader from "../Loader";

import PropTypes from "prop-types";

const styles = StyleSheet.create({
  picker: {
    width: 400,
    height: 20,
    flex: 1,
    justifyContent: "center"
  }
});

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
      moviesPageStore: { filters, onChangeFilters },
      options
    } = this.props;
    return (
      <Picker
        selectedValue={filters.sort_by}
        style={styles.picker}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => {
          onChangeFilters({ target: { name: "sort_by", value: itemValue } });
        }}
      >
        {options.map((option, index) =>
          <Picker.Item
            label={option.label}
            value={option.value}
            style={{ width: 200 }}
            key={index}
          />
        )}
      </Picker>
    );
  }
}
export default SortBy;
