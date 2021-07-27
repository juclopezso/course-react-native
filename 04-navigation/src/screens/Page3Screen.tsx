import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appThene'


interface Props extends StackScreenProps<any, any>{};

export const Page3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page 3</Text> 
      <Button 
        title="Go Back"
        onPress={() => navigation.pop()}
      />
      <Button 
        title="Go Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
