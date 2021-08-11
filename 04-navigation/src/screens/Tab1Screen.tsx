import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/appThene';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab 1 Screen</Text> 
      <Text>
        <TouchableIcon iconName="rocket" />
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  )
}
