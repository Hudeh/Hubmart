import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Shopcart from "../../assets/images/Shopcart.png";
import { toggleCartHidden } from "../../actions/header/actions";
import {
  selectCartItemsCount,
  selectCartSubTotal,
} from "../../reducers/cartReducer/selector";
import {formatter} from '../../utils/currencyFormater'
const Cart = ({ toggleCartHidden, ItemCount, subtotal }) => {
  return (
    <div className="cart-logo" onClick={toggleCartHidden}>
      <img src={Shopcart} />
      <span className="amount">{formatter.format(subtotal)}</span>
      <span className="count-product">{ItemCount}</span>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  ItemCount: selectCartItemsCount,
  subtotal: selectCartSubTotal,
});

export default connect(mapStateToProps, {toggleCartHidden})(Cart);
