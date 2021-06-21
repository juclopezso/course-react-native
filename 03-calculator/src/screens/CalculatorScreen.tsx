import React from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton';
import { useCalculator } from '../hooks/useCalculator';

import { styles } from '../theme/appTheme';


export const CalculatorScreen = () => {

  const { 
    result,
    lastResult,
    resetResult,
    parseNumber,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculate 
  } = useCalculator();

  return (
    <View style={styles.calcContainer}>
      {
        ( lastResult !== "0") &&
        <Text style={styles.resultSmall}>{lastResult}</Text> 
      }
      <Text 
        style={styles.result}
        // to fix second line big numbers
        numberOfLines={1}
        adjustsFontSizeToFit
        >
          {result}
       </Text> 

      {/* buttons row */}
      <View style={styles.row}>
        <CalcButton text="C" action={resetResult} />
        <CalcButton text="+/-" action={positiveNegative} />
        <CalcButton text="del" action={btnDelete} />
        <CalcButton bgColor="#FF9427" text="/" action={btnDivide} />
      </View>
      {/* buttons row */}
      <View style={styles.row}>
        <CalcButton text="7" action={parseNumber} />
        <CalcButton text="8" action={parseNumber} />
        <CalcButton text="9" action={parseNumber} />
        <CalcButton bgColor="#FF9427" text="x" action={btnMultiply} />
      </View>
      {/* buttons row */}
      <View style={styles.row}>
        <CalcButton text="4" action={parseNumber} />
        <CalcButton text="5" action={parseNumber} />
        <CalcButton text="6" action={parseNumber} />
        <CalcButton bgColor="#FF9427" text="-" action={btnSubstract} />
      </View>
      {/* buttons row */}
      <View style={styles.row}>
        <CalcButton text="1" action={parseNumber} />
        <CalcButton text="2" action={parseNumber} />
        <CalcButton text="3" action={parseNumber} />
        <CalcButton bgColor="#FF9427" text="+" action={btnAdd} />
      </View>
      {/* buttons row */}
      <View style={styles.row}>
        {/* <CalcButton text="0" large={true} /> */}
        <CalcButton text="0" large action={parseNumber} />
        <CalcButton text="." action={parseNumber} />
        <CalcButton bgColor="#FF9427" text="=" action={calculate} />
      </View>

    </View>
  )
}
