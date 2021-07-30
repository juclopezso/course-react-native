import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicLateralMenu } from './src/navigator/BasicLateralMenu';
import { LateralMenu } from './src/navigator/LateralMenu';


const App = () => {
  return (
    // to create navigation
    <NavigationContainer>
      <LateralMenu />
      {/* <BasicLateralMenu /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  )
}

export default App;

