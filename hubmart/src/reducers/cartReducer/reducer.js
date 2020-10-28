import { ADD_ITEMS_TO_CART, REMOVE_CART_ITEM_BUTTON, REDUCE_CART_ITEM, ADD_MORE_BUTTON,
    SUB_MORE_BUTTON } from "../../actions/cart/types";
  
  
  
  const INIT_STATE = {
    cartItems: []
  };
  
  const addItemsToCart = (cartItems, cartItemToAdd) => {
    const itemExist = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
    if (itemExist) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    
  };
  
  const reduceCartItem = (cartItems, cartItemToReduce) => {
    const itemExist = cartItems.find((cartItem) => cartItem.id === cartItemToReduce.id);
    if (itemExist.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToReduce.id);
    }
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
  export default (state = INIT_STATE, action) => {
  
    switch (action.type) {
  
      case ADD_ITEMS_TO_CART:
        return {
          cartItems: addItemsToCart(state.cartItems, action.payload),
        };
      case REDUCE_CART_ITEM:
        return {
          cartItems: reduceCartItem(state.cartItems, action.payload),
        };
      case REMOVE_CART_ITEM_BUTTON:
        return {
          ...state,
          cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
        };
        case ADD_MORE_BUTTON:
            return { ...state, addmore: state.addmore + 1 };
      
          case SUB_MORE_BUTTON: {
            return { ...state, addmore: state.addmore - 1 };
          }
      default:
        return state;
    }
  };
  