import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10)

  return (
    <View style={{
      flex: 1, // use all the space possible of the parent
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 40,
        textAlign: 'center',
        // position: 'relative', // realtive by default
        top: -10
      }}>Contador {counter}</Text> 
      {/* button doesn't have styles */}
      {/* <Button 
        title="Sumar" 
        onPress={() => setCounter(counter + 1)}
      /> */}
      <TouchableOpacity
        onPress={() => setCounter(counter + 1)} 
      >
        <View style={{
          backgroundColor: 'red',
          borderRadius: 100,
        }}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
