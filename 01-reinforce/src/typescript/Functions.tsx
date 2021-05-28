import React from 'react'

export const Functions = () => {
    
    // returns a type number
    // a and b type number
    const sumar = (a: number, b: number): number => {
        return a + b
    }

    return (
        <>
          <h3>Funciones</h3>  
          <span>La suma es { sumar(1,5) }</span>
        </>
    )
}
