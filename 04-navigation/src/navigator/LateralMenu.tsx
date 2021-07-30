import React from 'react'
import { createDrawerNavigator, DrawerContent, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appThene';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width > 768 ? "permanent" : "front"}
      // passing destructured props
      drawerContent={ (props) => <MenuContent {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuContent = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {

  return (
    <DrawerContentScrollView>
      {/* avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://assets-global.website-files.com/5dc81006205897079183a46c/5e2c4dcb60dc1a0237e593a1_avatar-placeholder.png"
          }}
          style={styles.avatar}
        />
      </View>
      {/* menu options */}
      <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => navigation.navigate("StackNavigator")}
            >
            <Text style={styles.menuText}>Navigation</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => navigation.navigate("SettingsScreen")}
            >
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}