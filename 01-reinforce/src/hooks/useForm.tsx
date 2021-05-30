import { useState } from 'react'

// generics use on form: <T> T is the standard for the first generic
// any letter can bve used as generic
// T is going to be at least an object
export const useForm = <T extends Object>(form: T) => {

  const [state, setState] = useState(form)

  // field has to be only the keys of form
  const onChange = (value: string, field: keyof T) => {
    setState({
      // desestructure all the fields of form
      ...state,
      // only change the field thats is being changed on the function call
      [field]: value
    })
  }

  return {
    // state can be destructured to use it's properties directly: i.e. {email, password}
    ...state,
    form: state,
    onChange
  }

}
