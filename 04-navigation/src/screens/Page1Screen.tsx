import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { styles } from '../theme/appThene'

// for only Stack navigation
// interface Props extends StackScreenProps<any, any>{};

// for drawer navigation
interface Props extends DrawerScreenProps<any, any>{};

export const Page1Screen = ( { navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      // hamburger button
      headerLeft: () => (
        <Button 
          title="Menu"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }, [])
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text> 
      <Button
        title="Go page 2"
        // name from StackNavigator
        onPress={() => navigation.navigate("Page2Screen")}
       />

      <Text style={{
        marginVertical: 10,
        fontSize: 20,
      }}>Navergar con argumentos</Text>
      
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity 
          style={{
            ...styles.bigButton,
            backgroundColor: "blue"
          }}
          onPress={() => navigation.navigate("PersonScreen", {
            id: 1,
            name: "Pedro"
          })}
        >
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{
            ...styles.bigButton,
            backgroundColor: "orange"
          }}
          onPress={() => navigation.navigate("PersonScreen", {
            id: 2,
            name: "Maria"
          })}
        >
          <Text style={styles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
