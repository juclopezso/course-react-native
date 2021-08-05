import React from 'react'
import { createDrawerNavigator, DrawerContent, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appThene';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width > 768 ? "permanent" : "front"}
      // passing destructured props
      drawerContent={ (props) => <MenuContent {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
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
            style={{
              ...styles.menuButton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate("Tabs")}
            >
            <Icon name="compass-outline" size={26} color="black" />
            <Text style={styles.menuText}>Tabs</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{
              ...styles.menuButton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate("SettingsScreen")}
            >
            <Icon name="cog-outline" size={26} color="black" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}