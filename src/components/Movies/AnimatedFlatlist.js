import React from "react";
import { View, FlatList, PanREsponder, Button, Animated } from "react-native";
import Loader from "../Loader";
import MovieItem from "./MovieItem";
import Header from "../Header/Header";
import { inject, observer } from "mobx-react";
import { movieScreenStyles, window, cardMovieStyles } from "../styles";

@inject("moviesPageStore")
@observer
class AnimatedFlatlist extends React.Component {
  constructor() {
    super();
    this.state = {
      cuuentIndex: 0
    };
    this.position = new Animated.ValueXY();

    this.movieOpacity = this.position.x.interpolate({
      inputRange: [-window.width / 2, 0, window.width / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp"
    });
  }

  componentDidMount() {
    this.props.moviesPageStore.getMovies();
    this.flatListRef.scrollToIndex({ index: this.flatListRef || 0 });
    // this.PanREsponder = new PanREsponder.create({
    //   onStartShouldSetPanResponder: (evt, gestureState) => true,
    //   onPanResponderMove: (evt, gestureState) => {
    //     this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
    //   },
    //   onPanResponderRelease: (evt,
    //   gestureState => {
    //     console.log("eeeeee");
    //   })
    // });
  }
  onScroll(e) {
    const { locationX } = e.nativeEvent;
    console.log("scrollToItem", locationX);
  }

  // renderMivie = item => {
  //   console.log("i = ", item.key);
  //   if (Number(item["id"]) < this.state.cuuentIndex) {
  //     console.log("item.id < this.state.cuuentIndex");
  //     return null;
  //   } else if (Number(item["id"]) !== this.state.cuuentIndex) {
  //     console.log("item.id == this.state.cuuentIndex");
  //     return (
  //       <Animated.View
  //         style={[cardMovieStyles.cardMovie, { opacity: this.movieOpacity }]}
  //       >
  //         <MovieItem item={item} />
  //       </Animated.View>
  //     );
  //   }
  // };

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
            <FlatList
              style={{ width: window.width }}
              onScroll={e => {
                this.onScroll(e);
              }}
              data={movies}
              renderItem={({ item }) => <MovieItem item={item} />}
              keyExtractor={item => String(item.id)}
              horizontal
              initialNumToRender={3}
              initialScrollIndex={this.state.cuuentIndex}
              scrollToIndex={20}
              ref={ref => {
                this.flatListRef = ref;
              }}
            />
          )}
        </View>
      </View>
    );
  }
}

export default MoviesScreen;
