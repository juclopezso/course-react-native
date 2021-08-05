import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';

const Tab = createMaterialTopTabNavigator();

// DO NOT USE
// disable reanimated 2 log
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appThene';
LogBox.ignoreLogs(['Sending'])



export const TopTabNavigator = () => {

  const { top:paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      // padding top for ios
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary
        },
        // remove tab border
        style: {
          borderWidth: 0,
          shadowColor: 'transparent',
          elevation: 0
        }
      }}
      // to insert icons or name of tabs
      screenOptions={ ({route}) => ({
          tabBarIcon: ({color, focused}) => {
            let iconName = "";
            switch(route.name) {
              case "ChatScreen":
                iconName = "color-fill-outline";
              break;
              case "ContactsScreen":
                iconName = "hand-right-outline";
              break;
              case "AlbumsScreen":
                iconName = "happy-outline";
              break;
            }
            return <Icon name={iconName} size={24} color={colors.primary} />
          }
        })
      }
    >
      <Tab.Screen name="ChatScreen" options={{title: "Chat"}} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{title: "Contacts"}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title: "Album"}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}