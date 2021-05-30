import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador {counter}</Text> 
      {/* button doesn't have styles */}
      {/* <Button 
        title="Sumar" 
        onPress={() => setCounter(counter + 1)}
      /> */}
      <Fab
        title="-1" 
        position='bl'
        onPress={() => setCounter(counter - 1)}
      />
      <Fab
        title="+1" 
        onPress={() => setCounter(counter + 1)}
      />
      {/* <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)} 
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // use all the space possible of the parent
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    // position: 'relative', // realtive by default
    top: -10
  },
})