import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loginUser } from "../../actions/auth/actions";
import {
  authUserSelector,
  showMessageSelector,
  alertMessageSelector,
} from "../../reducers/authReducer/selector";
import { renderField, hiddenField, validate} from "./LoginValidation";


function LoginForm(props) {
  const onSubmit = (formValues) => {
    props.loginUser(formValues);
  };

  if (props.isAuthenticated) {
    return <Redirect to='/my-account' />;
  }
  const { pristine, submitting } = props;

  return (
    
    <div className="login-container">
      <p className="auth-title">Login</p>
      
      <form onSubmit={props.handleSubmit(onSubmit)} className="login-form">
        <Field name="email" type="email" component={renderField} label="Email" />
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

const loginForm = connect(mapStateToProps, { loginUser })(LoginForm);

export default reduxForm({
  form: "loginForm",
  touchOnBlur: true,
  validate,
})(loginForm);

