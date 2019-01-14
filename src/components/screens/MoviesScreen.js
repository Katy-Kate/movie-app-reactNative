import React from "react";
import { StyleSheet, View, Text, Button, Picker, FlatList } from "react-native";
import { List, ListItem, Overlay } from "react-native-elements";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import Filters from "../Filters/Filters";
import Loader from "../Loader";
import MovieItem from "../Movies/MovieItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    marginTop: 30
  },
  filters: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "stretch",
    width: 400
  },
  card: {
    height: 30
  }
});

@inject("moviesPageStore")
@observer
class MoviesScreen extends React.Component {
  componentDidMount() {
    this.props.moviesPageStore.getMovies();
  }

  render() {
    const { moviesPageStore: { isLoading, movies } } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.filters}>
          <Filters />
        </View>
        <View style={{ flex: 10, backgroundColor: "steelblue" }}>
          {isLoading
            ? <Loader />
            : <FlatList
                data={movies}
                renderItem={({ item }) => <MovieItem item={item} />}
                keyExtractor={item => Number(item.id)}
              />}
        </View>
      </View>
    );
  }
}

export default MoviesScreen;

/* movies.map((movie, index) =>
                <MovieItem item={movie} key={index} /> 
)} */
