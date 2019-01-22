import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { View, FlatList, Animated, PanResponder } from "react-native";
import Loader from "../Loader";
import MovieItem from "../Movies/MovieItem";
import Header from "../Header/Header";
import { inject, observer } from "mobx-react";
import { movieScreenStyles, window } from "../styles";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const appStyles = EStyleSheet.create({
  animateContainer: {
    height: window.height - 300,
    width: window.width - 30,
    position: "absolute"
  }
});

@inject("moviesPageStore")
@observer
class MoviesScreen extends React.Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-window.width / 2, 0, window.width / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp"
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
      ]
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-window.width / 2, 0, window.width / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-window.width / 2, 0, window.width / 2],
      outputRange: [1, 0, 1],
      axtrapolate: "calmp"
    });

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-window.width / 2, 0, window.width / 2],
      outputRange: [1, 1, 1],
      axtrapolate: "calmp"
    });
  }

  componentDidMount() {
    this.props.moviesPageStore.getMovies();
  }
  componentWillMount() {
    this.PanResponder = new PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: window.width + 100, y: gestureState.dy }
          }).start(() => {
            this.setState(
              {
                currentIndex: this.state.currentIndex + 1
              },
              () => {
                this.position.setValue({ x: 0, y: 0 });
              }
            );
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -window.width - 100, y: gestureState.dy }
          }).start(() => {
            this.setState(
              {
                currentIndex: this.state.currentIndex + 1
              },
              () => {
                this.position.setValue({ x: 0, y: 0 });
              }
            );
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    });
  }

  renderMovies = () => {
    return this.props.moviesPageStore.movies
      .map((item, i) => {
        if (i < this.state.currentIndex) {
          return null;
        } else if (i === this.state.currentIndex) {
          return (
            <Animated.View
              key={item.id}
              {...this.PanResponder.panHandlers}
              style={[appStyles.animateContainer, this.rotateAndTranslate]}
            >
              <MovieItem item={item} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={item.id}
              style={[
                appStyles.animateContainer,

                {
                  transform: [
                    {
                      scale: this.nextCardScale
                    }
                  ],
                  opacity: this.nextCardOpacity
                }
              ]}
            >
              <MovieItem item={item} />
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  // onScroll(e) {
  //   const { locationX } = e.nativeEvent;
  //   console.log("scrollToItem", locationX);
  // }

  render() {
    const {
      moviesPageStore: { isLoading, movies }
    } = this.props;

    return (
      <View>
        <Header />
        <View style={movieScreenStyles.moviesContainer}>
          {isLoading ? <Loader /> : this.renderMovies()}
        </View>
      </View>
    );
  }
}

export default MoviesScreen;

// <Flatlist
//   style={[{ width: window.width }, animatedListStyles]}
//   onScroll={e => {
//     this.onScroll(e);
//   }}
//   data={movies}
//   renderItem={({ item }) => <MovieItem item={item} />}
//   keyExtractor={item => String(item.id)}
//   horizontal
//   initialNumToRender={3}
//   initialScrollIndex={this.state.cuuentIndex}
//   scrollToIndex={20}
//   ref={ref => {
//     this.item = ref;
//   }}
//       />
