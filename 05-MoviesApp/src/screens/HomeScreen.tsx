import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import { ScrollView, ActivityIndicator, Dimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';


// get dimensions of the phone
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  // const navigation = useNavigation();
  const { nowPlaying, popular, topRated, upcoming, isLoading } =  useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors } = useContext( GradientContext )

  // get the first movie bg colors
  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0)
    }
  }, [ nowPlaying ])

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    // green and orange are default values in case the function return null
    const [ primary = 'green', secondary = 'orange' ] = await getImageColors(uri)
    setMainColors({ primary: primary, secondary: secondary})
  }

  if ( isLoading ) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={80} />  
      </View>
    )
  }

  return (
    // enables page vertical scrolling
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* <Button title="Detail" onPress={ () => navigation.navigate('DetailScreen') } /> */}

          {/* principal carousel */}
          {/* to fix the shadow border, 20 points more than the card */}
          <View style={{ height: 440}}>
            <Carousel 
              data={ nowPlaying }
              renderItem={ ({ item }: any) => ( <MoviePoster movie={ item } /> )}
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              // fixes weird color on inactive images
              inactiveSlideOpacity={ 0.9 }
              // when image is changed
              onSnapToItem={ index => getPosterColors(index) }
            />
          </View>

          {/* popular movies */}
          {/* the ! is to tell ts to skip avoid the undefined return */}
          <HorizontalSlider title="Popular" movies={ popular! } />
          <HorizontalSlider title="Top Rated" movies={ topRated } /> 
          <HorizontalSlider title="Upcoming" movies={ upcoming } /> 

        </View>
      </ScrollView>
    </GradientBackground>
  )
}
