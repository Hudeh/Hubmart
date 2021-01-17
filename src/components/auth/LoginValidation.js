import React from 'react'

export const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="checkout-renderfield-layout">
      <label className="label">{label}*</label>
      <div className="checkout-renderfield">
        <input {...input} type={type} className="checkout-renderfield-input" />
        {touched && error && (
          <span className="checkout-renderfield-error">{error}</span>
        )}
      </div>
    </div>
  );
};

export const hiddenField = ({ type, meta: { error } }) => {
  return (
    <div className="checkout-renderfield-error">
      <input type={type} />
      {error && <div className="renderfield-error">{error}</div>}
    </div>
  );
};

export const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
};
