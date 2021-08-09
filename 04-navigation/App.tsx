import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicLateralMenu } from './src/navigator/BasicLateralMenu';
import { LateralMenu } from './src/navigator/LateralMenu';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {
  return (
    // to create navigation
    <NavigationContainer>
      <AppState>
        <LateralMenu />
        {/* <BasicLateralMenu /> */}
        {/* <StackNavigator /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;

