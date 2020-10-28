import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  auth: { 
    isLoading,
    isAuthenticated
  },
  ...rest
}) => {
  return (
    <Route
      render={props =>{
        if (isLoading) {
          return <div>Loading....</div>
        } else if (!isAuthenticated) {
          return <Redirect to='/login-signup' />
        } else {
          return <Component {...props} />
        }
      }}
      {...rest}
    />
  );
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps)(PrivateRoute);
