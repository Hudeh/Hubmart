import { createSelector } from "reselect";

const cartSelector = (state) => state.cartReducer;

export const selectCart = createSelector([cartSelector], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCart], (cartItems) =>
  cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity, 0)
);

export const selectCartSubTotal = createSelector([selectCart], (cartItems) =>
  cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity * cartItem.price,0)
);
