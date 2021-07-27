import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appThene';

export const Page2Screen = () => {

  // hook for navigation
  // a little less eficent that using the props
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      // overrides title setted on StackNavigator
      title: "Hello World",
      // change name of back button on ios
      headerBackTitle: "Volver"
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2</Text> 
      <Button 
        title="Go Page 3"
        onPress={() => navigator.navigate("Page3Screen")}
      />
    </View>
  )
}
