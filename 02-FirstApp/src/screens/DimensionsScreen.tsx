import React from 'react'
import { Text, View, Dimensions, StyleSheet, useWindowDimensions } from 'react-native'

// constant, doesn't change if the screen is rotate or changed
// const { width, height } = Dimensions.get('window')

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions()
  return (
    <View style={{flex: 1}}>
        <View style={{ 
          ...styles.redBox, 
          // able to use programmatic styles
          width: width * 0.4
        }}></View>
      <Text style={styles.title}>W: {width}, H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  redBox: {
    height: '20%',
    backgroundColor: 'red'
  },
   title: {
     fontSize: 30,
     textAlign: 'center'
   } 
});