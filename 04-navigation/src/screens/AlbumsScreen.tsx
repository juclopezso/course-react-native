import React from 'react'
import { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appThene'

export default () => {

  const { logout, authState } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}>Albums Screen</Text> 
      {
        authState.isLoggedIn && (
          <Button title="Log Out" onPress={() => logout()} />
        )
      }
    </View>
  )
}
