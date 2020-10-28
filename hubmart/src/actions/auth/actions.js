import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  SHOW_MESSAGE,
} from "./types";
import { stopSubmit } from "redux-form";



export const tokenConfig = (getState) => {
  // get token from state
  const token = getState().authReducer.token;

  // header config
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message,
  };
};




// LOAD USER
export const loadUser = () => async (dispatch,getState) => {

  // DISPATCH USER_LOADING
  dispatch({ type: USER_LOADING });

  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.get("/api/auth/user", tokenConfig(getState));

    // DISPATCH USER_LOADED_SUCCESS
    dispatch({ type: USER_LOADED_SUCCESS, payload: data });
  } catch (error) {
    // DISPATCH AUTH_ERROR
    dispatch({ type: AUTH_ERROR });
  }
};

// LOGIN USER
export const loginUser = ({ username, password }) => async (dispatch) => {
  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = { username, password };

  try {
    const { data } = await axios.post("/api/auth/login", body, config);

    // DISPATCH LOGIN_SUCCESS
    dispatch({ type: LOGIN_SUCCESS, payload: data });
   
  } catch (error) {
    // DISPATCH LOGIN_FAIL
    dispatch({ type: LOGIN_FAIL });    
    dispatch(stopSubmit("loginForm", error.response.data));
    // DISPATCH SET ALERT
    if (error.response.data) {
      error.response.data.username &&
        error.response.data.username.map((err) =>{
          dispatch(showAuthMessage(`Username: ${err}`, error.response.status, "danger"));
          console.log(err)}
        );

      error.response.data.password &&
        error.response.data.password.map((err) =>
          dispatch(showAuthMessage(`Password: ${err}`, error.response.status, "danger"))
        );

      error.response.data.non_field_errors &&
        error.response.data.non_field_errors.map((err) =>
          dispatch(showAuthMessage(err, error.response.status, "danger"))
        );
    }
  }
};

// REGISTER USER
export const registerUser = ({ username, email, password }) => async (dispatch) => {
  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = { username, email, password };

  try {
    const { data } = await axios.post('/api/auth/register', body, config);

    // DISPATCH REGISTER_SUCCESS
    dispatch({ type: REGISTER_SUCCESS, payload: data });

    // DISPATCH SET ALERT
    dispatch(showAuthMessage("Hia, You just logged in!", 200, "success"));
  } catch (error) {
    // DISPATCH REGISTER_FAIL
    dispatch({ type: REGISTER_FAIL });
    dispatch(stopSubmit("SignupForm", error.response.data));
    console.log(error.response.data);

    // DISPATCH SET ALERT
    if (error.response.data) {
      error.response.data.username &&
        error.response.data.username.map((err) =>
          dispatch(showAuthMessage(`Username: ${err}`, error.response.status, "danger"))
        );

      error.response.data.email &&
        error.response.data.email.map((err) =>
          dispatch(showAuthMessage(`Email: ${err}`, error.response.status, "danger"))
        );

      error.response.data.password &&
        error.response.data.password.map((err) =>
          dispatch(showAuthMessage(`Password: ${err}`, error.response.status, "danger"))
        );
    }
  }
};

// LOGOUT USER
export const logoutUser = () => async (dispatch) => {
  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post('/api/auth/logout', null, config);

    // DISPATCH LOGIN_SUCCESS
    dispatch({ type: LOGOUT_SUCCESS });

    // DISPATCH SET ALERT
    dispatch(showAuthMessage("You are successfully logged out!", 200, "success"));
  } catch (error) {
    console.log(error);
  }
};
