import { AuthState } from "./AuthContext";

type AuthAction = { type: 'signIn' };

// generate states
export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
  switch ( action.type ) {
    case 'signIn':
      // ALWAYS return a new state, do not mutate old state
      return {
        ...state,
        isLoggedIn: false,
        username: 'no-username'
      } 
      break;
  
    default:
      return state;
  }
}