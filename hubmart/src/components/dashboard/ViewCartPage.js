import React from "react";
import { connect } from "react-redux";
import './styles/viewCart.scss'
import {createStructuredSelector} from 'reselect'
import {
  selectCart,
  selectCartSubTotal,
} from "../../reducers/cartReducer/selector";
import ViewCartItem  from "./ViewCartItem";
import {formatter} from '../../utils/currencyFormater'

export const ViewCartPage = ({cartItems, subtotal}) => {
  return (
    <div className="viewcart-page">
      <div className="viewcart-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          
        </div>
        <div className="header-block">
          <span> Unit Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Total</span>
        </div>
        <div className="header-block">
          <span></span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (<ViewCartItem key={cartItem.id} cartItem={cartItem}/>))
      }
      <div className='total'>
        <span>Subtotal: {formatter.format(subtotal)} </span>
      </div>
      {cartItems.length >= 1 ? <button className='checkout-btn'>Procced To CheckOut</button> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
cartItems: selectCart,
subtotal: selectCartSubTotal
});


export default connect(mapStateToProps)(ViewCartPage);
