import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box objects model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // occupies all the space of the parent
    backgroundColor: 'red'
  },
   title: {
     fontSize: 20,
     // if you have doubts, use background colors
     backgroundColor: 'red'
   } 
});