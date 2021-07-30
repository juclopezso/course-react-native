import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
  // undefined for no parameters
  Page1Screen: undefined,
  Page2Screen: undefined,
  Page3Screen: undefined,
  PersonScreen: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // change default stack first element (need to restart metro if changed)
      // initialRouteName="Page2Screen"
      screenOptions={{
        headerStyle: {
          // removes bottom line on android
          elevation: 0,
          // removes bottom line on ios
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Page1Screen" options={{ title: "Page 1"}} component={Page1Screen} />
      <Stack.Screen name="Page2Screen" options={{ title: "Page 2"}} component={Page2Screen} />
      <Stack.Screen name="Page3Screen" options={{ title: "Page 3"}} component={Page3Screen} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}