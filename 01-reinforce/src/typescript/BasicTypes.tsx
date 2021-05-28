import React from 'react'

export const BasicTypes = () => {

  let name: string | number = 'Jose'
  name = 28912
  const isActive = true
  // strings array 
  const languages: string[] = ['Spanish', 'English', 'German']
  // languages.push(1) can't do this

  return (
      <>
        <h3>Tipos basicos</h3>  
        { name }, { isActive ? 'active' : 'inactive' }
        <br/>
        { languages.join(', ') }
      </>
  )
}
