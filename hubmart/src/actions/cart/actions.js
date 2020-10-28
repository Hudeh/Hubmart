import { ADD_ITEMS_TO_CART, REMOVE_CART_ITEM_BUTTON, REDUCE_CART_ITEM, ADD_MORE_BUTTON,
SUB_MORE_BUTTON } from "./types";

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