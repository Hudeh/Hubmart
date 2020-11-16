import React from "react";
import { connect } from "react-redux";
import { saveAddress } from "../../../actions/auth/actions";
import { Field, reduxForm } from "redux-form";
import { createStructuredSelector } from "reselect";
import { addressSelector } from "../../../reducers/authReducer/selector";

const Billing = ({ saveAddress, handleSubmit,address }) => {
  const {street_address,apartment_address,country,phone,zip,address_type} = address;
  console.log(street_address)
  const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <label className="label">{label}</label>
        <div className="account-user-input">
          <input {...input} type={type} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
  };

  const hiddenField = ({ type, meta: { error } }) => {
    return (
      <div>
        <input type={type} />
        {error && <div>{error}</div>}
      </div>
    );
  };
const defaultIfEmpty = value => {
  return value === "" ? "" : value;
};
  const onSubmit = (address) => [saveAddress(address)];
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="street_address" type="text" component={renderField} label="street"/>
        <Field name="apartment_address" type="text" component={renderField} label="apartment" />
        <Field name="country" type="text" component={renderField} label="country" />
        <Field name="phone" type="text" component={renderField} label="phone" />
        <Field name="zip" type="text" component={renderField} label="zip" />
        <Field name="address_type" type="select" component={renderField} label="address_type" />
        <Field name="default" type="checkbox" component={renderField} label="default type" />

        <div className="account-submit-button">
          <button>Save change</button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  address : addressSelector
})
const billing = connect(mapStateToProps, { saveAddress })(Billing);
export default reduxForm({
  form: "billing",
  touchOnBlur: false,
})(billing);
