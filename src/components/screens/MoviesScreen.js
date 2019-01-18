import React from "react";
import { View, FlatList } from "react-native";
import Filters from "../Filters/Filters";
import Loader from "../Loader";
import MovieItem from "../Movies/MovieItem";
import Header from "../Header/Header";
import { inject, observer } from "mobx-react";

@inject("moviesPageStore")
@observer
class MoviesScreen extends React.Component {
  componentDidMount() {
    this.props.moviesPageStore.getMovies();
  }

  render() {
    const { moviesPageStore: { isLoading, movies } } = this.props;

    return (
      <View>
        <Header />
        <Filters style={{ backgroundColor: "powderblue" }} />
        <View style={{ backgroundColor: "steelblue" }}>
          {isLoading
            ? <Loader />
            : <FlatList
                data={movies}
                renderItem={({ item }) => <MovieItem item={item} />}
                keyExtractor={item => String(item.id)}
              />}
        </View>
      </View>
    );
  }
}

export default MoviesScreen;
