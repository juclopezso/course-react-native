import React from 'react'
import { View, StyleSheet, Text } from 'react-native';


export const PositionScreen = () => {
  return (
    // all positions are relative to the parent, even the absolute position
    <View style={{flex: 1}}>
      <View style={styles.container}></View>
      <Text>Hola</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#28CD48',
      // // covers all the screen
      // position: 'absolute',
      // bottom: 0,
      // left: 0,
      // right: 0,
      // top: 0 
      // // same as above:
      ...StyleSheet.absoluteFillObject
    } 
});