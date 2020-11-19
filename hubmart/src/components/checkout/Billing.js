import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { reduxForm } from "redux-form";
import "./styles/checkout-login.scss";
import { fetchAddressBook } from "../../actions/auth/actions";

function Billing({ handleSubmit, billing_address }) {
  const dispatch = useDispatch(fetchAddressBook());
  useEffect(() => {
    dispatch(fetchAddressBook());
    return () => {
      //
    };
  }, []);


return (
    billing_address.map(address =>{
    return (
    <div key={address.id}>
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
      </div>
        <h3 className="billing-header">Billing Details</h3>
        <div className="labels">
          <label id="firstname">First name *</label>
          <label id="lastname">Last name *</label>
        </div>
        <div className="account-names-inputs">
          <input type="text" placeholder="first name" defaultValue={address.first_name}/>
          <input type="text" placeholder="last name" defaultValue={address.last_name} />
        </div>

        <div className="label">
          <label>Street address*</label>
        </div>

        <div className="account-user-input">
          <input type="text" placeholder="House number and Street name" defaultValue={address.street_address} />
        </div>
        <div className="label">
          <label>Town / City *</label>
        </div>

        <div className="account-user-input">
          <input type="text" placeholder="town/city"  defaultValue={address.city_name}/>
        </div>
        <div className="label">
          <label>State *</label>
        </div>

        <div className="account-user-input">
          <select className="account-user-input">
            <option value="">Lagos</option>
            <option value="">Ogun</option>
            <option value="">Oyo</option>
            <option value="">Kebbi</option>
            <option value="">Etc</option>
          </select>
        </div>
        <div className="postal">
          <label>Postal Code *</label>
        </div>

        <div className="account-postal-input">
          <input type="number" placeholder="Postcode/Zip" defaultValue={address.zip} />
        </div>
        <div className="label">
          <label>Phone *</label>
        </div>

        <div className="account-user-input">
          <input type="number" placeholder="Phone Number" defaultValue={address.phone}/>
        </div>
        <div className="label">
          <label>Email *</label>
        </div>

        <div className="account-user-input">
          <input type="text" placeholder="email address" defaultValue={address.user}/>
        </div>

        <div className="log">
          <label>Hubmart Store Close You *</label>
        </div>
        <div className="account-log-input">
          <select className="options">
            <option value="Hubmart Store,Ikeja">Hubmart Store,Ikeja</option>
            <option value="Hubmart Store,Lekki">Hubmart Store,Lekki</option>
            <option value="Hubmart Store,Ogba">Hubmart Store,Ogba</option>
          </select>
        </div>
        <div className="create-account">
          <input type="checkbox" />
          <p className="create">Create an account?</p>
        </div>

        <div className="account-submit-button">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
    )})
    );
}

const mapStateToProps = (state) => ({
  billing_address: state.authReducer.address,
});

const billing = connect(mapStateToProps)(Billing);
export default reduxForm({
    form: 'checkoutform',
    destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(billing)
