import React from "react";
import { connect } from "react-redux";
import CartProductItem from "./cartProduct";
import "./styles/cartdrop-item.scss";
import {withRouter} from 'react-router-dom'
import { selectCart } from "../../reducers/cartReducer/selector";
import { toggleCartHidden } from "../../actions/header/actions";
import { removeCartItems } from "../../actions/cart/actions";

const CartDropDown = ({ cartItems, removeCartItems,toggleCartHidden, history }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map((cartitem) => (
              <CartProductItem
                key={cartitem.id}
                item={cartitem}
                removeCartItems={removeCartItems}
              />
            ))}
          </div>
          <div className='buttons'>

          <button
            className="view_cart"
            onClick={() => {
               history.push("/my-cart");
              toggleCartHidden();
            }}
          >
            View Cart
          </button>
          <button
            className="checkout"
            onClick={() => {
               history.push("/check-out");
              toggleCartHidden();
            }}
          >
            Checkout
          </button>
          </div>
        </>
      ) : (
        <>
        <div className="empty-message">Your cart is empty</div>
        <button
            className="got_store"
            onClick={() => {
              history.push("/shop");
              toggleCartHidden();
            }}
          >
            Go Shop
          </button>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCart(state),
});
export default 
  withRouter(connect(mapStateToProps, { toggleCartHidden, removeCartItems })(CartDropDown));
