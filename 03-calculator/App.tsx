import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen';

import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      {/* style status bar */}
      <StatusBar
        backgroundColor="black"
        barStyle='light-content'
      />
      <CalculatorScreen />
    </SafeAreaView>
    )
}

export default App;

