import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appThene';

export const SettingsScreen = () => {

  // safe view sizes
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
      }}>
      <Text style={styles.title}>Settings Screen</Text> 
    </View>
  )
}
