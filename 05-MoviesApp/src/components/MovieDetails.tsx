import React from 'react'
import { Text, View } from 'react-native'
import currencyFormatter from 'currency-formatter'
import Icon from 'react-native-vector-icons/Ionicons'
import movieDB from '../api/movieDB'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import { CastItem } from './CastItem'
import { FlatList } from 'react-native-gesture-handler'


interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* details */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row'}}>
          <Icon 
            name="star-outline"
            color="grey"
            size={16}
          />
          <Text>{ movieFull.vote_average }</Text>
          <Text style={{ marginLeft: 6 }}>
            - { movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        {/* history */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          History
        </Text>
        <Text style={{ fontSize: 16 }}>
          { movieFull.overview }
        </Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>
        <Text style={{ fontSize: 18 }}>
          { currencyFormatter.format(movieFull.budget, { code: 'USD' }) }
        </Text>
      </View>
      {/* casting */}
      <View style={{ marginTop: 10, marginHorizontal: 20, marginBottom: 100 }}>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Cast
        </Text>
        <FlatList 
          data={ cast }
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({ item, index }) => <CastItem actor={ item } /> }
          horizontal
          showsHorizontalScrollIndicator={ false }
          style={{ marginTop: 10, }}
        />
      </View>
    </>
  )
}
