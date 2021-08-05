import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/appThene';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab 1 Screen</Text> 
      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>
    </View>
  )
}
