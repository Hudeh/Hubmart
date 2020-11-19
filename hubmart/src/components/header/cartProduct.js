import React from 'react'
import {formatter} from '../../utils/currencyFormater'
 const CartProductItem = ({ items, removeCartItems }) => {
   const { item, price, image, quantity } = items;
    return (
      <div className="cart-item">
        <img src={image} alt="item" className='imgproduct'/>
        <div className="item-details">
          <span className="cart-name">{item}</span>
          <span className="cart-price">
            {quantity} x {formatter.format(price)}
          </span>
        </div>
      <span className='rm-cart-btn' onClick={() => removeCartItems(items)}>&#10005;</span>
      </div>
    );
  };
  export default CartProductItem