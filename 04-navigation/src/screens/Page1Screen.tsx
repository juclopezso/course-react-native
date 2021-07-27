import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appThene'

interface Props extends StackScreenProps<any, any>{};

export const Page1Screen = ( { navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text> 
      <Button
        title="Go page 2"
        // name from StackNavigator
        onPress={() => navigation.navigate("Page2Screen")}
       />
    </View>
  )
}
