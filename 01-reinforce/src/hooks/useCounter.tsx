import React, { useState } from 'react'

export const useCounter = (initial: number = 10) => {
    // initial 10 as default

    const [value, setValue] = useState(initial)

    const acumular = (amount: number) => {
        setValue(value+amount)
    } 

    return {
        value,
        acumular
    }
}
