import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appThene';

export const Page2Screen = () => {

  // hook for navigation
  // a little less eficent that using the props
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Page 2</Text> 
      <Button 
        title="Go Page 3"
        onPress={() => navigator.navigate("Page3Screen")}
      />
    </View>
  )
}
