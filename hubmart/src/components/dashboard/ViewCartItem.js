import React from "react";
import { connect } from "react-redux";
import { removeCartItems, addCartItems, reduceCartItem } from "../../actions/cart/actions";

const ViewCartItem = ({ cartItem, removeCartItems,addCartItems,reduceCartItem }) => {
  const { name, image, quantity, price } = cartItem;
  const total = quantity * price;
  return (
    <div className="viewcart-item">
      <div className="image-container">
        <img src={image} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItems(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{total}</span>
      <span className="remove-button" onClick={() => removeCartItems(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};



export default connect(null, {removeCartItems,addCartItems,reduceCartItem})(ViewCartItem);
