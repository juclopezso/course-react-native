import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appThene'

interface Props extends StackScreenProps<RootStackParams, "PersonScreen">{};

export const PersonScreen = ( {route, navigation}: Props) => {

  const params = route.params

  const { changeUsername } = useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  // Each useEffect has to do one work
  useEffect(() => {
    changeUsername(params.name)
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Person Screen</Text> 
      <Text>{ JSON.stringify(params, null, 2) }</Text>
    </View>
  )
}
