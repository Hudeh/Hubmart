import {
  ADD_ITEMS_TO_CART,
  REMOVE_CART_ITEM_BUTTON,
  REDUCE_CART_ITEM,
  ADD_MORE_BUTTON,
  SUB_MORE_BUTTON,
  PLACE_ORDERS_SUCCESS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ALL_ORDERS,
  FETCH_ORDERS_FAILS
} from "./types";
import axios from '../../utils/Api'
export const addCartItems = (product) => {
  return {
    type: ADD_ITEMS_TO_CART,
    payload: product,
  };
};

export const removeCartItems = (product) => {
  return {
    type: REMOVE_CART_ITEM_BUTTON,
    payload: product,
  };
};
export const reduceCartItem = (product) => {
  return {
    type: REDUCE_CART_ITEM,
    payload: product,
  };
};
export const addCount = () => {
  return { type: ADD_MORE_BUTTON };
};
export const subCount = () => {
  return { type: SUB_MORE_BUTTON };
};

export const placeOrder = (order) => async (dispatch) => {
  const config = {
    "Content-Types": "application/json",
  };
  try {
    const { data } = await axios.post("/api/v1/order", order, config);
    dispatch({ type: PLACE_ORDERS_SUCCESS, payload: data });
  } catch (error) {}
};



export const loadAllOrder = () => (dispatch) => dispatch({ type: FETCH_ALL_ORDERS });

// FETCH PRODUCTs
export const fetchOrders = () => async (dispatch) => {
  dispatch(loadAllOrder());
  try {
    const res = await axios.get("/api/v1/order");
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ORDERS_FAILS, payload: error.message });
  }
};