import React from 'react';
import {reduxForm} from 'redux-form';



const Billing = (props) => {
    const {handleSubmit} = props;
    return (
        <div >
            <form onSubmit={handleSubmit}>
            <h3 className="billing-header">Billing Details</h3>
                <div className='labels'>
                    <label id='firstname'>First name *</label>
                    <label id='lastname'>Last name *</label>
                </div>
                <div className='account-names-inputs'>
                    <input type='text' placeholder='first name' />
                    <input type='text'  placeholder='last name'/>
                </div>


                <div className='label'>
                     <label>Street address*</label>
                </div>
                
                <div className="account-user-input">
                    <input type="text" placeholder="House number and Street name"  />
                </div>
                <div className='label'>
                     <label >Town / City *</label>
                </div>
                
                <div className="account-user-input">
                    <input type="text" placeholder="town/city"  />
                </div>
                <div className='label'>
                     <label >State  *</label>
                </div>
                
                <div className="account-user-input">
                    <select className="account-user-input">
                    <option value=''></option>
                    <option value=''>Lagos</option>
                      <option value=''>Ogun</option>
                      <option value=''>Oyo</option>
                      <option value=''>Kebbi</option>
                      <option value=''>Etc</option>
                    </select>
                </div>
                <div className='postal'>
                     <label >Postal Code *</label>
                </div>
                
                <div className="account-postal-input">
                    <input type="number" placeholder="Postcode/Zip"/>
                </div>
                <div className='label'>
                     <label >Phone *</label>
                </div>
                
                <div className="account-user-input">
                    <input type="number" placeholder="Phone Number"/>
                </div>
                <div className='label'>
                     <label >Email *</label>
                </div>
                
                <div className="account-user-input">
                    <input type="text" placeholder="email address"/>
                </div>
                
                <div className='log'>
                     <label >Hubmart Store Close You *</label>
                </div>
                <div className="account-log-input">
                  <select className='options'>
                  <option value=''></option>
                      <option value='Hubmart Store,Ikeja'>Hubmart Store,Ikeja</option>
                      <option value='Hubmart Store,Lekki'>Hubmart Store,Lekki</option>
                      <option value='Hubmart Store,Ogba'>Hubmart Store,Ogba</option>
                  </select>
                </div>
                 <div className='create-account'>
                     <input type='checkbox'/>
                     <p className='create'>Create an account?</p>
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
})(Billing)