import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ScrollView, ActivityIndicator, Button, Dimensions, Text, View, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'


// get dimensions of the phone
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  // const navigation = useNavigation();
  const { nowMovies, popularMovies, isLoading } =  useMovies();
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
            data={ nowMovies }
            renderItem={ ({ item }: any) => ( <MoviePoster movie={ item } /> )}
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
            // fixes weird color on inactive images
            inactiveSlideOpacity={ 0.9 }
          />
        </View>

        {/* popular movies */}
        <HorizontalSlider title="Currently" movies={ nowMovies } />
        <HorizontalSlider title="Popular" movies={ popularMovies } />

      </View>

    </ScrollView>
  )
}
