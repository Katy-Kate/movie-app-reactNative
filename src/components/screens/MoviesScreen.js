import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { View, FlatList, Animated } from "react-native";
import { Button } from "react-native-elements";
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
      moviesPageStore: {
        isLoading,
        movies,
        onChangePage,
        prevPage,
        nextPage,
        page
      }
    } = this.props;

    return (
      <View>
        <Header />
        <View style={movieScreenStyles.moviesContainer}>
          {isLoading ? (
            <Loader />
          ) : (
            <View>
              <AnimatedFlatList
                style={{
                  width: WIDTH_SCREEN
                }}
                data={movies}
                renderItem={({ item, index }) => (
                  <Animated.View
                    style={[animatedFlatListItem(index), { marginTop: 20 }]}
                  >
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
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center"
                }}
              >
                <Button
                  disabled={page === 1}
                  disabledStyle={{
                    opacity: 0.5,
                    backgroundColor: EStyleSheet.value("$mainDarkColor")
                  }}
                  title="prev page"
                  buttonStyle={movieScreenStyles.btn}
                  onPress={prevPage}
                />
                <Button
                  title="next page"
                  buttonStyle={movieScreenStyles.btn}
                  onPress={nextPage}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default MoviesScreen;
