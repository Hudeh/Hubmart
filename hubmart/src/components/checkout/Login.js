import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loginUser } from "../../actions/auth/actions";
import "./styles/checkout-login.scss";
import {
  authUserSelector,
  showMessageSelector,
  alertMessageSelector,
} from "../../reducers/authReducer/selector";
import PropTypes from "prop-types";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="checkout-renderfield-layout">
      <label>{label}</label>
      <div className="checkout-renderfield">
        <input {...input} type={type} className="checkout-renderfield-input" />
        {touched && error && (
          <span className="checkout-renderfield-error">{error}</span>
        )}
      </div>
    </div>
  );
};

const hiddenField = ({ type, meta: { error } }) => {
  return (
    <div className="checkout-renderfield-error">
      <input type={type} />
      {error && <div className="renderfield-error">{error}</div>}
    </div>
  );
};

function LoginForm(props) {
  const onSubmit = (formValues) => {
    props.loginUser(formValues);
  };

  if (props.isAuthenticated) {
    return <Redirect to="/checkout" />;
  }
  const { pristine, submitting } = props;

  return (
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
      <p className="auth-title">Welcome back! Sign in to your account.</p>
      <p className="auth-signin-writeup">
        If you have shopped with us before, please enter your details in the
        boxes below. If you are a new customer, please proceed to the Billing &{" "}
        <br />
        Shipping section.
      </p>
      <form onSubmit={props.handleSubmit(onSubmit)} className="login-form">
        <div className="container">
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
          <Field
            name="non_field_errors"
            type="hidden"
            component={hiddenField}
          />
          <div className="checkout">
            <input type="checkbox" />
            <p className="checkbox">Remember me</p>
            <a href="/password-reset" className="password-reset">
              Lost your password?
            </a>
            <button
              className="checkout-login-btn"
              disabled={pristine || submitting}
            >
              Login
            </button>
            <button className="back-btn">Back to Cart</button>
            <button className="skip-btn">Skip Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: authUserSelector(state),
  showMessage: showMessageSelector(state),
  alertMessage: alertMessageSelector(state),
});

const loginForm = connect(mapStateToProps, { loginUser })(LoginForm);

export default reduxForm({
  form: "loginForm",
  validate,
})(loginForm);
 
