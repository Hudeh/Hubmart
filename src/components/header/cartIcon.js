import React from "react";
import { connect } from "react-redux";
import Shopcart from "../../assets/images/Shopcart.png";
import _ from "lodash";



const Cart = ({handleCartHidden, ItemCount, cartItems }) => {
  let subtotal =0;
   _.map(cartItems,(cartitem)=>{
     subtotal += cartitem.product.price * cartitem.quantity
   })
  return (
    <div className="cart-logo" onClick={handleCartHidden}>
      <img src={Shopcart} />
      <span className="amount">₦{(subtotal).toFixed(2)}</span>
      <span className="count-product">{ItemCount}</span>
    </div>
  );
};
const mapStateToProps = state =>({
  ItemCount: state.cartReducer.length,
  cartItems: state.cartReducer
});

export default connect(mapStateToProps)(Cart);
