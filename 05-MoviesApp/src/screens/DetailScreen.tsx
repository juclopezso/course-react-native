import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation'
import Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( { route, navigation }: Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
  const { isLoading, movieFull, cast } = useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
        <View style={ styles.imageBorder }>
          <Image
            source={{ uri }}
            style={ styles.posterImage }
          />
        </View>
      </View>

      <View style={ styles.bodyContainer }>
        <Text style={ styles.subtitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>
      {
        isLoading
            ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
            : <MovieDetails movieFull={ movieFull! } cast={ cast } />
      }
      <TouchableOpacity 
        style={ styles.backButton }
        onPress={ () => navigation.pop() }
        >
        <Icon 
          color="white"
          name="arrow-back-outline"
          size={50}
          style={ styles.backButtonIcon }
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    // overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  bodyContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 999,
    top: 20,
    left: 5
  },
  backButtonIcon: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
  }
})
