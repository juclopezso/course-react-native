import { act } from "react-test-renderer";
import { AuthState } from "./AuthContext";

type AuthAction = 
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFavIcon', payload: string }
  | { type: 'changeUsername', payload: string };

// generate states
export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
  switch ( action.type ) {
    case 'signIn':
      // ALWAYS return a new state, do not mutate old state
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username'
      } 

    case 'logout':
      return {
        ...state, // just in case
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      }

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    
    case 'changeUsername':
      return {
        ...state,
        username: action.payload
      }

    default:
      return state;
  }
}