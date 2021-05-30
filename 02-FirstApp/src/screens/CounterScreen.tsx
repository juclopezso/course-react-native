import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)} 
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)} 
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
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
  fabLocationBL: {
    position: 'absolute',
    left: 25,
    bottom: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})