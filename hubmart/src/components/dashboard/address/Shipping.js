import React from 'react'
export default function Shipping(props) {
    return (
        <div> 
        <form>
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
                <input type="text" placeholder="House number and Street name" name="street" required />
            </div>
            <div className='label'>
                <label >Town / City *</label>
            </div>
            
            <div className="account-user-input">
                <input type="text" placeholder="House number and Street name" name="street" required />
            </div>
            <div className='label'>
                <label >State / County *</label>
            </div>

            <div className="account-submit-button">
                <button>Save change</button>
            </div>
        </form>
        </div>
    )
}
