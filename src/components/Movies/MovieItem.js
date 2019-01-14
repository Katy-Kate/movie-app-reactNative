import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { toJS } from 'mobx';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 10,
    backgroundColor: 'powderblue',
    margin: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white'
  },
  cardImgWrap: {},
  cardBody: {
    padding: 10,
    alignSelf: 'center'
  },
  cardTitle: {
    fontSize: 20,
    color: '#060340'
  },
  cardText: {},
  cardImg: {
    height: 200
  }
});

class MovieItem extends React.Component {
  render () {
    const { item } = this.props;
    const img =
      item.backdrop_path || item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`
        : 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg';
    return (
      <View style={styles.card}>
        <View style={styles.cardImgWrap}>
          <Image
            style={styles.cardImg}
            source={{
              uri: img
            }}
          />
        </View>

        <View style={styles.cardBody}>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>
              {item.title}
            </Text>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardText}>
              Рейтинг: {item.vote_average}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default MovieItem;
