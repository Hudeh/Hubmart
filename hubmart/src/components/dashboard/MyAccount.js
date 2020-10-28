import React from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import { logoutUser } from "../../actions/auth/actions";

 function MyAccount({currentUser,history, logoutUser}) {
  return (
    <>
    <div>
      <p
        style={{ textDecoration: "none", color: "#00aeff",cursor:'pointer' }}
          >
          Hello {currentUser.user.username} not {currentUser.user.username}?{" "}
          <span style={{cursor:'pointer' }} onClick={() => {logoutUser();history.push("/")}}>Logout</span>
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <Link to='/'style={{ textDecoration: "none", color: "#00aeff" }}>recent orders, </Link> manage
        your{" "}
        <Link to='/' style={{ textDecoration: "none", color: "#00aeff" }}>
          shipping and billing addresses,
        </Link>
      </p>
      <p>
        and{" "}
        <Link to='/' style={{ textDecoration: "none", color: "#00aeff" }}>
          edit your password and account details.
        </Link>
      </p>
    </div>
    </>
  );
}
const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

export default withRouter(connect(mapStateToProps,{logoutUser})(MyAccount));