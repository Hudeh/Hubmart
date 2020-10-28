import {
  USER_LOADING,
  USER_LOADED_SUCCESS,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SHOW_MESSAGE
} from "../../actions/auth/types";

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  currentUser: null,
  errors: {},
  alertMessage: "",
  showMessage: false,
};

export default (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case USER_LOADED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        currentUser: payload
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
        currentUser: payload

      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        currentUser: null
      };
      case SHOW_MESSAGE:
        return { ...state, alertMessage: payload, showMessage: true, isLoading: false };
    default:
      return state;
  }
};