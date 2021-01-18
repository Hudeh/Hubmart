import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { registerUser } from "../../actions/auth/actions";
import {
  authUserSelector,
  showMessageSelector,
  alertMessageSelector,
  tokenSelector
} from "../../reducers/authReducer/selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderField, hiddenField, signupValidate } from "./LoginValidation";




const SignupForm = (props) => {
  const onSubmit = (formValues) => {
    props.registerUser(formValues);
  };

  if (props.isAuthenticated) {
    return <Redirect to='/my-account' />;
  }
  const { pristine, reset, submitting, alertMessage, showMessage } = props;

  return (
    <>
      <div className="signup-container">
        <p className="auth-title">Register</p>
        <form onSubmit={props.handleSubmit(onSubmit)} className="login-form">
          <p className="welcome-register">
            Create new account today to reap the benefits of a personalized shopping experience.
          </p>
          <div className="users">
            <Field
              name="email"
              type="email"
              component={renderField}
              label="Email Address"
            />
            <Field name="password" type="password" component={renderField} label="Password" />
          </div>
          {/* <div className="vendor">
            <Field name="last Name" type="last Name" component={renderField} label="last Name" />
            <Field name="Shop Name" type="Shop Name" component={renderField} label="Shop Name" />
            <Field name="Shop URL" type="Shop URL" component={renderField} label="Shop URL" />
            <Field
              name="Phone Number"
              type="Phone Number"
              component={renderField}
              label="Phone Number"
            />
          </div> */}
          {/* <div className="signup-customer">
            <div className="signup-customer-input">
              <input type="radio" />
              <p className="signup-customer-note">I am a customer</p>
            </div>
            <div className="signup-vendor">
              <div className="signup-vendor-input">
                <input type="radio" />
                <p className="signup-vendor-note">I am a vendor</p>
              </div>
            </div>
          </div> */}
          <Field name="non_field_errors" type="hidden" component={hiddenField} />
          <p className="signup-note">
            Your personal data will be used to support your experience throughout this website, to
            manage access to your account, and for other purposes described in our privacy policy.
          </p>
          <button className="signin-btn" disabled={pristine || submitting}>
            Register
          </button>
          <p className="signin-to">Sign up today and you will be able to :</p>
          <div className="signin-to">
            <div className="signin-to-input">
              <FontAwesomeIcon icon="check" />
              <p className="signin-to1-note">Speed your way through checkout</p>
            </div>
          </div>
          <div className="signin-to">
            <div className="signin-to-input">
              <FontAwesomeIcon icon="check" />
              <p className="signin-to1-note">Track your orders easily</p>
            </div>
          </div>
          <div className="signin-to">
            <div className="signin-to-input">
              <FontAwesomeIcon icon="check" />
              <p className="signin-to1-note">Keep a record of all your purchases</p>
            </div>
          </div>
        </form>
        {showMessage && <div className="renderfield-error">{alertMessage}</div>}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authUserSelector(state),
  showMessage: showMessageSelector(state),
  alertMessage: alertMessageSelector(state),
});

const signupForm = connect(mapStateToProps, { registerUser })(SignupForm);

export default reduxForm({
  form: "SignupForm",
  touchOnBlur: false,
  signupValidate,
})(signupForm);
