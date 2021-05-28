import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterConHook = () => {

    const { value, acumular } = useCounter(100)

    return (
        <>
          <h1>Contador con hook: <small>{ value }</small></h1>  
          <button onClick={ () => acumular(1) }>+1</button>
          &nbsp;
          <button onClick={ () => acumular(-1) }>-1</button>
        </>
    )
}
