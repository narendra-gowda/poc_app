import { 
  LOGIN_PRESSED, 
  LOGOUT_PRESSED,
  IS_DARK_MODE,
  PUSH_STATUS 
} from "../actions/login";

const initialState = {
  emailId: null,
  showLogin: true,
  darkMode: false,
  pushData: null,
}

const loginReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_PRESSED: return {
      ...state,
      emailId: action.payload.emailId,
      showLogin: false,
    }
    case LOGOUT_PRESSED: return {
      ...state,
      emailId: null,
      showLogin: true,
    }
    case IS_DARK_MODE: return {
      ...state,
      darkMode: action.payload.darkMode,
    }
    case PUSH_STATUS: return {
      ...state,
      pushData: action.payload.value,
    }
    default: return state
  }
}
export default loginReducer;