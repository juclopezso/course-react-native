import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { CounterScreen } from './src/screens/CounterScreen'
import { DimensionsScreen } from './src/screens/DimensionsScreen'
import { FlexScreen } from './src/screens/FlexScreen'
import { Homework } from './src/screens/Homework'
import { PositionScreen } from './src/screens/PositionScreen'
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen'

const App = () => {
  return (
    // to fix the notch view, should be used at screen level, not app level
    <SafeAreaView style={{flex: 1}}>
     {/* <HelloWorldScreen />
     <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <Homework />
    </SafeAreaView>
  )
}

export default App