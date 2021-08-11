import React from 'react'
import { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext, authInitialState } from '../context/AuthContext'
import { styles } from '../theme/appThene'

export default () => {

  const { signIn, authState } = useContext(AuthContext)

  return (
    <View>
      <Text style={styles.title}>Constacts Screen</Text> 
      {
        !authState.isLoggedIn && <Button title="Sign In" onPress={() => signIn()} />
      }
    </View>
  )
}
