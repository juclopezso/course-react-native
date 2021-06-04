import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row', // column by default
    justifyContent: 'center', // aligns vertically if columns, horizontal if rows
    alignItems: 'flex-start', // stretch by default
    // alignSelf: 'flex-end' // overrides parent content
    flexWrap: 'wrap' // nowrap default, how to manage space if children items exceeds the parent's size
  },
    caja1: {
      // depends on other flex sizes: 4 + 4 + 2 = 10 total
      // flex: 4,
      borderWidth: 2,
      borderColor: 'white',
      fontSize: 30,
      alignSelf: 'flex-end' // overrides parent content
    },
    caja2: {
      // flex: 4,
      borderWidth: 2,
      borderColor: 'white',
      fontSize: 30
    },
    caja3: {
      // flex: 2,
      borderWidth: 2,
      borderColor: 'white',
      fontSize: 30
    }
});