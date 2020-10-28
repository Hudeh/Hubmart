import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loginUser } from "../../actions/auth/actions";
import {
  authUserSelector,
  showMessageSelector,
  alertMessageSelector,
} from "../../reducers/authReducer/selector";
import PropTypes from "prop-types";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="login-renderfield-layout">
      <label>{label}</label>
      <div className="login-renderfield">
        <input {...input} type={type} className="login-renderfield-input" />
        {touched && error && <span className="login-renderfield-error">{error}</span>}
      </div>
    </div>
  );
};

const hiddenField = ({ type, meta: { error } }) => {
  return (
    <div className="login-renderfield-error">
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
    return <Redirect to="/my-account" />;
  }
  const { pristine, submitting, error } = props;

  return (
    <div className="login-container">
      <p className="auth-title">Login</p>
      <form onSubmit={props.handleSubmit(onSubmit)} className="login-form">
        <Field name="username" type="text" component={renderField} label="Username" />
        <Field name="password" type="password" component={renderField} label="Password" />
        <Field name="non_field_errors" type="hidden" component={hiddenField} />
        <button className="login-btn" disabled={pristine || submitting}>
          Login
        </button>
      </form>
      <p className="text">
        Don't have an account? <Link to="/login-signup">Register</Link>
      </p>
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

LoginForm = connect(mapStateToProps, { loginUser })(LoginForm);

export default reduxForm({
  form: "loginForm",
  validate,
})(LoginForm);
