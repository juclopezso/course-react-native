import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ScrollView, ActivityIndicator, Dimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'


// get dimensions of the phone
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  // const navigation = useNavigation();
  const { nowPlaying, popular, topRated, upcoming, isLoading } =  useMovies();
  const { top } = useSafeAreaInsets();

  if ( isLoading ) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={80} />  
      </View>
    )
  }

  return (
    // enables page vertical scrolling
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
          />
        </View>

        {/* popular movies */}
        {/* the ! is to tell ts to skip avoid the undefined return */}
        <HorizontalSlider title="Popular" movies={ popular! } />
        <HorizontalSlider title="Top Rated" movies={ topRated } /> 
        <HorizontalSlider title="Upcoming" movies={ upcoming } /> 

      </View>

    </ScrollView>
  )
}
