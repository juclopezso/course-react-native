import React from 'react'
import { BackHandler, Text, TouchableOpacity, View } from 'react-native'

import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  bgColor?: string;
  large?: boolean;
  action: (number: string) => void;
}

export const CalcButton = ({text, action, large = false, bgColor = '#2D2D2D'}: Props) => {
  return (
    <TouchableOpacity
      onPress={ () => action(text) }
    >
      <View style={{
        ...styles.button,
        backgroundColor: bgColor,
        width: (large) ? 180 : 80
      }}>
        <Text style={{
          ...styles.buttonText,
          color: (bgColor === '#9B9B9B' ) ? 'black' : 'white'
          }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
