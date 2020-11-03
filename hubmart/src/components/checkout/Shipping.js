import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'



const Shipping = (props) =>{
    const {handleSubmit} = props;
    return (
        <div> 
        <form onSubmit={handleSubmit}>
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
                <button type='submit'>back</button>
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