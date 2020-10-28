import React from 'react'
import {formatter} from '../../utils/currencyFormater'
 const CartProductItem = ({ item, removeCartItems }) => {
   const { name, price, image, quantity } = item
    return (
      <div className="cart-item">
        <img src={image} alt="item" className='imgproduct'/>
        <div className="item-details">
          <span className="cart-name">{name}</span>
          <span className="cart-price">
            {quantity} x {formatter.format(price)}
          </span>
        </div>
      <span className='rm-cart-btn' onClick={() => removeCartItems(item)}>&#10005;</span>
      </div>
    );
  };
  export default CartProductItem