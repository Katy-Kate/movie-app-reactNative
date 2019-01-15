import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text } from 'react-native-elements';

class MovieItem extends React.Component {
  render () {
    const { item } = this.props;
    const img =
      item.backdrop_path || item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`
        : 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg';
    return (
      <Card
        image={{
          uri: img
        }}
      >
        <View>
          <Text h4 style={{ color: 'steelblue' }}>
            {item.title}
          </Text>
          <Text>
            Рейтинг: {item.vote_average}
          </Text>
        </View>
      </Card>
    );
  }
}
export default MovieItem;
