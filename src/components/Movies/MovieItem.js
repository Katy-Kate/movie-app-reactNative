import React from "react";
import { View, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import { cardMovieStyles } from "../styles";

class MovieItem extends React.Component {
  render() {
    const { item } = this.props;
    const img =
      item.backdrop_path || item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`
        : "https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg";
    return (
      <Card
        containerStyle={cardMovieStyles.cardMovie}
        imageStyle={cardMovieStyles.imageMovie}
        image={{
          uri: img
        }}
      >
        <View>
          <Text style={cardMovieStyles.cardMovieTitle}>{item.title}</Text>
          <Text>Рейтинг: {item.vote_average}</Text>
        </View>
      </Card>
    );
  }
}
export default MovieItem;
