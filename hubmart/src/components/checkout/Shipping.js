import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import "./styles/checkout-login.scss";

const Shipping = (props) =>{
    const {handleSubmit,previousPage} = props;
    return (
        <div> 
        <form onSubmit={handleSubmit}>

        <div className="checkout-container">
      <p className='checkout-title'>Checkout</p>
      <div className="checkout-scroll">
      <div className="inflow-scroll"></div>
        <div className="first-scroll">
        <p className="first-scroll-writeup">1</p>
        </div>
          <p className="second-scroll">2</p>
        <div className="third-scroll">
        <p className="third-scroll-writeup">3</p>
        </div>
        <div className="fourth-scroll">
        <p className="fourth-scroll-writeup">4</p>
        </div>
        <div className="outflow-scroll"></div>
      </div>
      <div className='scroll-words'>
        <p className='scroll-word-login'>Login</p>
        <p className='scroll-word-billing'>Billing</p>
        <p className='scroll-word-shipping'>Shipping</p>
        <p className='scroll-word-payment'>Order & Payment</p>
      </div>
      </div>
        <h3 className="shipping-header">Shipping Details</h3>
        <div className="shipping-account">
          <input type="checkbox" />
          <p className="shipping">Ship to a different address?</p>
        </div>

        <div className="account-ordernote-input">
          <input
            type="text"
            placeholder="Order Notes:Notes about your order e.g. special notes for delivery"
          />
        </div>

            <div className="account-submit-button">
                <button type='submit'>Next</button>
            </div>
            <div className="account-back-button">
                <button type='button' onClick={previousPage}>back</button>
            </div>
        </form>
        </div>
    )
}
export default reduxForm({
    form: 'checkoutform',
    destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true, 
})(Shipping)