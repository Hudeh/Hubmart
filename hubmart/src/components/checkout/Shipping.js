import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'



const Shipping = (props) =>{
    const {handleSubmit} = props;
    return (
        <div> 
        <form onSubmit={handleSubmit}>
            <div className='labels'>
                <label>First name *</label>
                <label id='lastname'>Last name *</label>
            </div>
            <div className='account-names-inputs'>
                <input type='text' />
                <input type='text' />
            </div>

            <div className='label'>
                <label >Country / Region *</label>
            </div>
            <div className='label'>
                <label >Nigeria</label>
            </div>

            <div className='label'>
                <label >Street address*</label>
            </div>
            
            <div className="account-user-input">
                <input type="text" placeholder="House number and Street name" required />
            </div>
            <div className='label'>
                <label >Town / City *</label>
            </div>
            
            <div className="account-user-input">
                <input type="text" placeholder="House number and Street name" required />
            </div>
            <div className='label'>
                <label >State / County *</label>
            </div>

            <div className="account-submit-button">
                <button type='submit'>Next</button>
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