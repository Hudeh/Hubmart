import axios from '../../utils/Api'
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
  FETCH_ADDRESS_FAIL, FETCH_ADDRESS_SUCCESS,
  CREATE_ADDRESS_FAIL,
  CREATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILS,
  UPDATE_ADDRESS_SUCCESS
} from "./types";
import { stopSubmit } from "redux-form";
import { tokenConfig } from '../tokenConfig';




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

  try {
    const { data } = await axios.get("/api/auth/users", tokenConfig(getState));

    // DISPATCH USER_LOADED_SUCCESS
    dispatch({ type: USER_LOADED_SUCCESS, payload: data });
  } catch (error) {
    // DISPATCH AUTH_ERROR
    dispatch({ type: AUTH_ERROR });
  }
};

// LOGIN USER
export const loginUser = ({ email, password }) => async (dispatch) => {
  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = { email, password };

  try {
    const { data } = await axios.post("/api/auth/login", body, config);

    // DISPATCH LOGIN_SUCCESS
    dispatch({ type: LOGIN_SUCCESS, payload: data });
   
  } catch (error) {
    // DISPATCH LOGIN_FAIL
    dispatch({ type: LOGIN_FAIL });    
    dispatch(stopSubmit("loginForm", error.response.data));
    // DISPATCH SET ALERT
     }
};

// REGISTER USER
export const registerUser = ({ email, password }) => async (dispatch) => {
  // SET HEADERS
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = {email, password };

  try {
    const { data } = await axios.post('/api/auth/register', body, config);

    // DISPATCH REGISTER_SUCCESS
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    // DISPATCH REGISTER_FAIL
    dispatch({ type: REGISTER_FAIL });
    dispatch(stopSubmit("SignupForm", error.response.data));
      }
};

// LOGOUT USER
export const logoutUser = () => async (dispatch, getState) => {
  try {
    const {res} = await axios.post('/api/auth/logout', null, tokenConfig(getState));

    // DISPATCH LOGIN_SUCCESS
    dispatch({ type: LOGOUT_SUCCESS });

    // DISPATCH SET ALERT
    dispatch(showAuthMessage("You are successfully logged out!", 200, "success"));
  } catch (error) {
    console.log(error);
  }
};


export const saveAddress =  address => async (dispatch,getState )=>{
  try{
    const res = await axios.post('/api/address', {...address}, tokenConfig(getState));
    dispatch({type:CREATE_ADDRESS_SUCCESS, payload:res.data});
  }catch(error){
    dispatch({type:CREATE_ADDRESS_FAIL, payload: error.message})
  }
}

export const updateAddress = (id, address) => async (dispatch,getState) =>{
  try {
    const res = await axios.patch(`/api/address/${id}`, {...address}, tokenConfig(getState))
    dispatch({type: UPDATE_ADDRESS_SUCCESS,payload:{id, res}})
  } catch (error) {
    dispatch({UPDATE_ADDRESS_FAILS})
  }
}

export const fetchAddressBook = () => async (dispatch, getState) =>{
  try {
    const res = await axios.get('/api/address', tokenConfig(getState));
    dispatch({type: FETCH_ADDRESS_SUCCESS, payload: res.data})
  } catch (error) {
    dispatch({type:FETCH_ADDRESS_FAIL, payload: error.message})
  }
}