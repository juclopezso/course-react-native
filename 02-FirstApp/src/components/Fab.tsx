import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  title: string;
  // ? is optional
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, position = 'br', onPress}: Props) => {

  return (
      <TouchableOpacity
        // list of styles
        style={[
          styles.fabLocation,
          ( position === 'bl') ? styles.left : styles.right
        ]}
        onPress={onPress} 
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25
  },
  left: {
    left: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})