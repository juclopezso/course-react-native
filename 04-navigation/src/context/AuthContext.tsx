import React, { Children, createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

// define what information is here
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// initial state (when app starts)
export const authInitialState: AuthState = {
  isLoggedIn: false,
  // optional
  username: undefined,
  favoriteIcon: undefined,
}

// tell React how the context looks and what exports
export interface AuthContextProps {
  authState: AuthState;
  // no return function
  signIn: () => void;
}

// create the context
export const AuthContext = createContext({} as AuthContextProps);

// Provider state component
// export const AuthProvider = ({children}: {children: JSX.Element[]}) => {
export const AuthProvider = ({children}: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({ type: 'signIn' })
  }

  return (
    <AuthContext.Provider value={{
      // authState: authState,
      authState,
      signIn
    }}>
      { children }
    </AuthContext.Provider>
  )
}