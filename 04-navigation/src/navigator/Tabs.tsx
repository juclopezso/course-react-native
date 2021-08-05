import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appThene';
import { Platform, Text } from 'react-native';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={ ({route}) => ({
          tabBarIcon: ({color, focused}) => {
            let iconName = "";
            switch(route.name) {
              case "Tab1Screen":
                iconName = "airplane";
              break;
              case "TopTabNavigator":
                iconName = "archive-outline";
              break;
              case "StackNavigator":
                iconName = "bicycle-outline";
              break;
            }
            return <Icon name={iconName} size={26} color="#f2f2f2" />
          }
        })
      }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: "Tab 1"}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: "Top T"}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: "Stack"}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}






const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      // tab container
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      // bottoms tabs
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        labelStyle: {
          fontSize: 16
        }
      }}
      // to insert icons or name of tabs
      screenOptions={ ({route}) => ({
          tabBarIcon: ({color, focused, size}) => {
            let iconName = "";
            switch(route.name) {
              case "Tab1Screen":
                iconName = "airplane";
              break;
              case "TopTabNavigator":
                iconName = "archive-outline";
              break;
              case "StackNavigator":
                iconName = "bicycle-outline";
              break;
            }
            return <Icon name={iconName} size={26} color="#f2f2f2" />
          }
        })
      }
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: "Tab 1"}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: "Top T"}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: "Stack"}} component={StackNavigator} />
    </BottomTabIOS.Navigator>

  )
}