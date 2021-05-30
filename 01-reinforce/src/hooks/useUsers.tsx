import { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResList, User } from '../interfaces/reqRes'

export const useUsers = () => {

  const [users, setUsers] = useState<User[]>([])
  // for pagination
  // se puede usar para referenciar el valor de una variable
  // pero cuando cambia su valor no se re renderiza
  const pageRef = useRef(1) 


  useEffect(() => {
    // api call
    loadUsers();
  }, [])

  const loadUsers = async () => {
    try {
      const res = await reqResApi.get<ReqResList>('/users', {
        params: {
          // pageRef -> ref to object, .current -> ref value
          page: pageRef.current
        }
      })
      if (res.data.data.length > 0) {
        setUsers(res.data.data)
      } else {
        pageRef.current -= 1
        alert('No more users')
      }
    } catch (error) {
      console.log(error) 
    }
    // reqResApi.get<ReqResList>('/users')
    //   .then(res => {
    //     setUsers(res.data.data)
    //   })
      // .catch( err => console.log(err))
      // same as:
      // .catch( console.log )
  }

  const nextPage = () => {
      pageRef.current += 1
      loadUsers()
  }

  const prevPage = () => {
    if (pageRef.current > 1) {
      pageRef.current -= 1
      loadUsers()
    } else {
      alert('No previos pages')
    }
  }
  
  return {
    users,
    nextPage,
    prevPage
  }
}
