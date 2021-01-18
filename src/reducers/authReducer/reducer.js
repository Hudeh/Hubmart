import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import {
  USER_LOADING,
  USER_LOADED_SUCCESS,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SHOW_MESSAGE,
  CREATE_BILLING_ADDRESS_SUCCESS,
  CREATE_BILLING_ADDRESS_FAILS,
  GET_SINGLE_BILLING_ADDRESS_SUCCESS,
  GET_SINGLE_BILLING_ADDRESS_FAILS,
  UPDATE_BILLING_ADDRESS_SUCCESS,
  UPDATE_BILLING_ADDRESS_FAILS,
  FETCH_BILLING_ADDRESS_SUCCESS,
  FETCH_BILLING_ADDRESS_FAILS,
  CREATE_SHIPPING_ADDRESS_SUCCESS,
  CREATE_SHIPPING_ADDRESS_FAILS,
  UPDATE_SHIPPING_ADDRESS_SUCCESS,
  UPDATE_SHIPPING_ADDRESS_FAILS,
  FETCH_SHIPPING_ADDRESS_FAILS,
  FETCH_SHIPPING_ADDRESS_SUCCESS,
  GET_SINGLE_SHIPPING_ADDRESS_SUCCESS,
  GET_SINGLE_SHIPPING_ADDRESS_FAILS,
  SHOW_FORM,
} from "../../actions/auth/types";
import shortid from 'shortid'
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  currentUser: null,
  errors: [],
  alertMessage: "",
  showMessage: false,
  billingAddress: [],
  shippingAddress: [],
  singleAddress:[],
  checked: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        currentUser: payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
        currentUser: payload,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return{
        ...state,
        errors:payload
      }
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        currentUser: null,
      };
    case SHOW_MESSAGE:
      return { ...state, alertMessage: payload, showMessage: true, isLoading: false };

    // Billing
    case FETCH_BILLING_ADDRESS_SUCCESS:
      return {
        ...state,
        billingAddress: payload,
      };
    case FETCH_BILLING_ADDRESS_FAILS:
      return {
        ...state,
        errors: payload,
      };
    case CREATE_BILLING_ADDRESS_SUCCESS:
      return {
        ...state,
        billingAddress: payload,
      };
    case CREATE_BILLING_ADDRESS_FAILS:
      return { ...state, errors: payload };
    case UPDATE_BILLING_ADDRESS_SUCCESS:
      return { ...state, singleAddress:[state.billingAddress.map(address => address.id === payload.id ? payload.address: address)] };
    case UPDATE_BILLING_ADDRESS_FAILS:
      return { ...state, errors: payload };
    case GET_SINGLE_BILLING_ADDRESS_SUCCESS:
      return { ...state, singleAddress: payload.res.data};
    case GET_SINGLE_BILLING_ADDRESS_FAILS:
      return { ...state, error: payload };
    
      // Shipping case
    case CREATE_SHIPPING_ADDRESS_SUCCESS:
      return { ...state, shippingAddress: payload };
    case CREATE_SHIPPING_ADDRESS_FAILS:
      return { ...state, error: payload };
    case FETCH_SHIPPING_ADDRESS_SUCCESS:
      return { ...state, shippingAddress: payload };
    case FETCH_SHIPPING_ADDRESS_FAILS:
      return { ...state, error: payload };
    case GET_SINGLE_SHIPPING_ADDRESS_SUCCESS:
      return { ...state, singleAddress: payload.res.data};
    case GET_SINGLE_SHIPPING_ADDRESS_FAILS:
      return { ...state, error: payload };
    case UPDATE_SHIPPING_ADDRESS_SUCCESS:
      return { ...state,
        singleAddress: [state.shippingAddress.map(address => address.id === payload.id ? payload.address : address)]};
    case UPDATE_SHIPPING_ADDRESS_FAILS:
      return { ...state, error: payload };
    case SHOW_FORM:
      return {
        ...state,
        checked: true,
      };
    default:
      return state;
  }
};
