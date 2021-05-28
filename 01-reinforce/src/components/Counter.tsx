import { useState } from 'react'

export const Counter = () => {

    const [value, setValue] = useState(0)

    const acumular = (amount: number) => {
        setValue(value+amount)
    } 

    return (
        <>
          <h1>Contador: <small>{ value }</small></h1>  
          <button onClick={ () => acumular(1) }>+1</button>
          &nbsp;
          <button onClick={ () => acumular(-1) }>-1</button>
        </>
    )
}
