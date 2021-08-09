import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appThene';

export const SettingsScreen = () => {

  // safe view sizes
  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
      }}>
      <Text style={styles.title}>Settings Screen</Text> 
      <Text>{ JSON.stringify(authState, null, 4) }</Text>
    </View>
  )
}
