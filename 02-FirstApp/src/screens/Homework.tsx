import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Homework = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.cajaRosada}></View>
      <View style={styles.cajaGris}></View>
      <View style={styles.cajaCafe}></View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cajaRosada: {
      width: 100,
      // height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#FCA0B2'
    },
    cajaGris: {
      width: 100,
      // height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#A8A0B2'
    },
    cajaCafe: {
      width: 100,
      // height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: 'brown'
    }
});