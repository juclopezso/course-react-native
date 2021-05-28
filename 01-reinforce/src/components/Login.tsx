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

// type for actions
type AuthAction = { type: 'logout' };

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
        default:
            return state;
    }
}

export const Login = () => {

    // const  [state, dispatch] = useReducer(authReducer, initialState)
    // como state es de tipo AuthState se puede desestructurar asi:
    const  [{ validating }, dispatch] = useReducer(authReducer, initialState)


    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [])

    if (validating) {
        return (
                <>
            <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            
            <div className="alert alert-danger">No autenticado...</div>
            <div className="alert alert-success">Autenticado...</div>
            <button className="btn btn-primary">
                Login
            </button>
            <button className="btn btn-danger">
                Logout
            </button>
        </>
    )
}
