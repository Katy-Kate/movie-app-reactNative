import React from "react";
import { View, FlatList, Animated, Easing } from "react-native";
import Loader from "../Loader";
import MovieItem from "../Movies/MovieItem";
import Header from "../Header/Header";
import { inject, observer } from "mobx-react";
import { movieScreenStyles, WIDTH_SCREEN } from "../styles";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const offsetX = new Animated.Value(0);

const animatedFlatListItem = index => {
  return {
    opacity: offsetX.interpolate({
      inputRange: [
        (index - 1) * WIDTH_SCREEN,
        index * WIDTH_SCREEN,
        (index + 1) * WIDTH_SCREEN
      ],
      outputRange: [0, 1, 0]
    })
  };
};

@inject("moviesPageStore")
@observer
class MoviesScreen extends React.Component {
  componentDidMount() {
    this.props.moviesPageStore.getMovies();
  }
  render() {
    const {
      moviesPageStore: { isLoading, movies }
    } = this.props;

    return (
      <View>
        <Header />
        <View style={movieScreenStyles.moviesContainer}>
          {isLoading ? (
            <Loader />
          ) : (
            <AnimatedFlatList
              style={{ width: WIDTH_SCREEN - 30 }}
              data={movies}
              renderItem={({ item, index }) => (
                <Animated.View style={animatedFlatListItem(index)}>
                  <MovieItem item={item} index={index} />
                </Animated.View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => String(item.id)}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: offsetX } } }],
                { useNativeDriver: true }
              )}
            />
          )}
        </View>
      </View>
    );
  }
}

export default MoviesScreen;
