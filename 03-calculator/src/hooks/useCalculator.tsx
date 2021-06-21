import React, { useRef, useState } from 'react'

enum Operators {
  add, substract, multiply, divide
}

export const useCalculator = () => {

  const [result, setResult] = useState('0');
  const [lastResult, setLastResult] = useState('0');

  // ref do not re render when changes it's value
  const lastOperation = useRef<Operators>()

  const resetResult = () => {
    setResult('0')
    setLastResult('0')
  }

  const parseNumber = (numberText: string) => {
    // max lenght number
    if (result.length > 16) return;
    // doesn't allow double points
    if (result.includes(".") && numberText === ".") return;

    if (result.startsWith('0') || result.startsWith("-0")) {
      // decimal point
      if (numberText === ".") {
        setResult(result + numberText)
        // evalute if it's another 0 
      } else if (numberText === "0" && result.includes(".")) {
        setResult(result + numberText)
        // is diff from 0 and has no points
      } else if (numberText !== "0" && !result.includes(".")) {
        setResult(numberText)
        // avoid 0000.0
      } else if (numberText === "0" && !result.includes(".")) {
        setResult(result)
      }
      else {
        setResult(result + numberText)
      }
    } else {
        setResult(result + numberText)
        // TODO: add "," to tousands
        // if (result.replace(",", "").length % 3 === 0) {
        //   setResult(result + ",")
        // }
    }
  }

  const positiveNegative = () => {
    if (result.includes("-")) {
      setResult(result.replace("-", ""))
    } else {
      setResult("-" + result)
    }
  }

  const btnDelete = () => {
    let negative = '';
    let resultTemp = result;
    if (result.includes("-")) {
      negative = "-"
      resultTemp = result.substr(1)
    }

    if (resultTemp.length > 1) {
      setResult(negative + resultTemp.slice(0, -1))
    } else {
      setResult("0")
    }
  }

  const changeLastNumber = () => {
    if (result.endsWith(".")) {
      setLastResult(result.slice(0, -1))
    } else {
      setLastResult(result)
    }
    setResult("0")
  }

  const btnDivide = () => {
    changeLastNumber();
    lastOperation.current = Operators.divide;
  }

  const btnMultiply = () => {
    changeLastNumber();
    lastOperation.current = Operators.multiply;
  }

  const btnSubstract = () => {
    changeLastNumber();
    lastOperation.current = Operators.substract;
  }

  const btnAdd = () => {
    changeLastNumber();
    lastOperation.current = Operators.add;
  }

  const calculate = () => {
    const num1 = Number(result)
    const num2 = Number(lastResult)

    // TODO: fix bug when an operation is pressed 2 consecutive times
    switch (lastOperation.current) {
      case Operators.add:
        setResult(`${num2+num1}`) 
        setLastResult("0")
        break;
      case Operators.substract:
        setResult(`${num2-num1}`) 
        setLastResult("0")
        break;
      case Operators.multiply:
        setResult(`${num2*num1}`) 
        setLastResult("0")
        break;
      case Operators.divide:
        if (num1 == 0) {
          setLastResult("Error: Division by zero")
          setResult(`${num2}`) 
        } else if (!num2) {
          setResult(`${num1}`) 
        } else {
          setResult(`${num2/num1}`) 
        }
        break;
    
      default:
        break;
    }

  }

  return {
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
    calculate,
  } 
}
