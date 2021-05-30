import { useEffect, useReducer } from 'react'

interface AuthState {
    validating: boolean;
    token: string | null;
    username:  string;
    name: string;
}

const initialState: AuthState = {
    validating: true,
    token: null,
    username: '',
    name: ''
}

type LoginPayload = {
  username: string;
  name: string;
}

// type for actions
type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };

// returns AuthState interface
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    // state no deberia mutarse NUNCA
    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                name: '',
                username: ''
            }
        case 'login':
          const { name, username } = action.payload
          return {
            validating: false,
            token: 'abc1234',
            name,
            username
            // name: action.payload.name,
            // username: action.payload.username
          }
        default:
            return state;
    }
}

export const Login = () => {

    // const  [state, dispatch] = useReducer(authReducer, initialState)
    // como state es de tipo AuthState se puede desestructurar asi:
    const  [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState)


    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [])
    // []: only executes useEffect at first render
    // [state]: executes every time state changes

    const login = () => {
      dispatch({
        type: 'login', 
        payload: {
          name: 'Juan',
          username: 'Juanchozx'
        } 
      })
    }

    const logout = () => {
      dispatch({ type: 'logout' })
    }

    if (validating) {
        return (
          <>
            <h3>Login</h3>
            <div className="alert alert-info">Validando...</div>
          </>
        )
    }

    return (
        <>
          <h3>Login</h3>

          {
            ( token )
              ? <div className="alert alert-success">Autenticado como: {name}</div>
              : <div className="alert alert-danger">No autenticado...</div>
          }

          {
            ( token ) 
              ? (
                <button 
                  className="btn btn-danger"
                  onClick={ logout }>
                    Logout
                </button>
              )
              : (
                <button 
                  className="btn btn-primary"
                  onClick={ login }>
                    Login
                </button>
              )
          }
        </>
    )
}
