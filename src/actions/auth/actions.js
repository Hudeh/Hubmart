import axios from "../../utils/Api";
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
  FETCH_BILLING_ADDRESS_FAILS,
  FETCH_BILLING_ADDRESS_SUCCESS,
  CREATE_BILLING_ADDRESS_FAILS,
  CREATE_BILLING_ADDRESS_SUCCESS,
  UPDATE_BILLING_ADDRESS_FAILS,
  UPDATE_BILLING_ADDRESS_SUCCESS,
  GET_SINGLE_BILLING_ADDRESS_SUCCESS,
  GET_SINGLE_BILLING_ADDRESS_FAILS,
  CREATE_SHIPPING_ADDRESS_SUCCESS,
  CREATE_SHIPPING_ADDRESS_FAILS,
  UPDATE_SHIPPING_ADDRESS_SUCCESS,
  UPDATE_SHIPPING_ADDRESS_FAILS,
  FETCH_SHIPPING_ADDRESS_FAILS,
  FETCH_SHIPPING_ADDRESS_SUCCESS,
  GET_SINGLE_SHIPPING_ADDRESS_SUCCESS,
  GET_SINGLE_SHIPPING_ADDRESS_FAILS,
  SHOW_FORM
} from "./types";
import { stopSubmit,reset } from "redux-form";
import { tokenConfig } from "../tokenConfig";


export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message,
  };
};

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
 
  try {
    const { data } = await axios.get("/api/auth/users", tokenConfig(getState));

    // DISPATCH USER_LOADED_SUCCESS
    dispatch({ type: USER_LOADED_SUCCESS, payload: data });
  } catch (error) {
    // DISPATCH AUTH_ERROR
    dispatch({ type: AUTH_ERROR, payload: error.message});
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
    dispatch({ type: LOGIN_FAIL,payload:error.message });
    dispatch(stopSubmit("loginForm",{ errors:error.message}));
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

  const body = { email, password };

  try {
    const { res } = await axios.post("/api/auth/register", body, config);

    // DISPATCH REGISTER_SUCCESS
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    // DISPATCH REGISTER_FAIL
    dispatch({ type: REGISTER_FAIL });
    dispatch(stopSubmit("SignupForm", error.message));
  }
};

// LOGOUT USER
export const logoutUser = () => async (dispatch, getState) => {
  try {
    const { res } = await axios.post("/api/auth/logout", null, tokenConfig(getState));

    // DISPATCH LOGIN_SUCCESS
    dispatch({ type: LOGOUT_SUCCESS });

    // DISPATCH SET ALERT
    dispatch(showAuthMessage("You are successfully logged out!", 200, "success"));
  } catch (error) {
    console.log(error);
  }
};

//billing address create
export const saveBillingAddress= (address) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/api/billing", { ...address }, tokenConfig(getState));
    dispatch({ type: CREATE_BILLING_ADDRESS_SUCCESS, payload: res.data });
    dispatch(reset("billing"));
  } catch (error) {
    dispatch({ type: CREATE_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};

//get single billing address
export const getSingleBillngAddress = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/api/billing/${id}`, tokenConfig(getState));
    dispatch({ type: GET_SINGLE_BILLING_ADDRESS_SUCCESS, payload:{id, res} });
  } catch (error) {
    dispatch({type: GET_SINGLE_BILLING_ADDRESS_FAILS, payload:error.message });
  }
};

//update billing address
export const updateBillingAddress  = (id, address) => async (dispatch, getState) => {
  try {
    const res = await axios.patch(`/api/billing/${id}`, { ...address }, tokenConfig(getState));
    dispatch({ type: UPDATE_BILLING_ADDRESS_SUCCESS, payload: { id, res } });
  } catch (error) {
    dispatch({type: UPDATE_BILLING_ADDRESS_FAILS,payload:error.message });
  }
};

// fetch all billing address
export const fetchAddressBook = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/api/billing", tokenConfig(getState));
    dispatch({ type: FETCH_BILLING_ADDRESS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};



// create shipping address
export const createShippingAddress = (address) => async (dispatch, getState)=>{
  try {
    const res = await axios.post("/api/shipping",address, tokenConfig(getState));
    dispatch({type: CREATE_SHIPPING_ADDRESS_SUCCESS, payload:res.data})
    dispatch(reset("shipping"));
  } catch (error) {
    dispatch({ type:CREATE_SHIPPING_ADDRESS_FAILS, payload: error.message })
  }
}

//update shipping address
export const updateShippingAddress = (id, address) => async (dispatch, getState)=>{
  try {
    const res = await axios.patch(`/api/shipping/${id}`, {...address},tokenConfig(getState))
    dispatch({type: UPDATE_SHIPPING_ADDRESS_SUCCESS, payload: { id, address }})
  } catch (error) {
    dispatch({type: UPDATE_SHIPPING_ADDRESS_FAILS, payload: error.message })
  }
}

//get shipping address
export const fetchShippingAddress = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/api/shipping", tokenConfig(getState));
    dispatch({ type: FETCH_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_SHIPPING_ADDRESS_FAILS, payload:error.message });
  }
};


//get single shipping address
export const singleShippingAddress = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/api/shipping/${id}`, tokenConfig(getState));
    dispatch({ type: GET_SINGLE_SHIPPING_ADDRESS_SUCCESS, payload: {id, res} });
  } catch (error) {
    dispatch({ type: GET_SINGLE_SHIPPING_ADDRESS_FAILS, payload:error.message });
  }
};

export const toggleshipingForm = () =>{
  return{
    type: SHOW_FORM, 
  }
}
