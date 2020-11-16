import React from "react";
import { connect } from "react-redux";
import { NavLink, Switch, Route, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/dashboard.scss";
import OrderView from "./OrderView";
import AccountView from "./AccountView";
import MyAccount from "./MyAccount";
import Billing  from "./address/Billing";
import Shipping  from "./address/Shipping";
import Download from "./Download";
import PaymentDetails from "./PaymentDetails";
import Address from "./address/Address";
import { logoutUser } from "../../actions/auth/actions";


function DashBoard({ match,logout, history }) {
  return (
    <>
      <div className="breadcrumbs">
        <p>
          Home <span>&gt;</span>
        </p>
        <p>{match.url} &gt;</p>
      </div>
      <h3>My Account</h3>
      <div className="account">
        <div className="account-links">
          <div style={{ textDecoration: "none", borderBottom: ".1rem rgb(216, 213, 213) solid" }}>
            <h2>My Account</h2>
          </div>
          <div className="account-link">
            <ul>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "#000000" }}
                  exact
                  to={`${match.url}`}
                  activeStyle={{ textDecoration: "none", color: "#F15A22", marginLeft: "-1rem" }}
                >
                  Dashboard
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon="tachometer-alt" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "#000000" }}
                  to={`${match.path}/billing`}
                  activeStyle={{ textDecoration: "none", color: "#F15A22", marginLeft: "-1rem" }}
                >
                  Billing
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon="shopping-basket" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "#000000" }}
                  to={`${match.path}/shipping`}
                  activeStyle={{ textDecoration: "none", color: "#F15A22", marginLeft: "-1rem" }}
                >
                  Shipping
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon="shopping-basket" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "#000000" }}
                  to={`${match.path}/orders`}
                  activeStyle={{ textDecoration: "none", color: "#F15A22", marginLeft: "-1rem" }}
                >
                  Orders
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon="shopping-basket" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "#000000" }}
                  to={`${match.path}/download`}
                  activeStyle={{ textDecoration: "none", color: "#F15A22", marginLeft: "-1rem" }}
                >
                  Downloads
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon="download" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "#000000" }}
                  to={`${match.path}/address`}
                  activeStyle={{ textDecoration: "none", color: "#F15A22", marginLeft: "-1rem" }}
                >
                  Addresses
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon="home" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "#000000" }}
                  to={`${match.path}/payment-method`}
                  activeStyle={{ textDecoration: "none", color: "#F15A22", marginLeft: "-1rem" }}
                >
                  Payment methods
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon="credit-card" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "#000000" }}
                  to={`${match.path}/account-details`}
                  activeStyle={{ textDecoration: "none", color: "#F15A22", marginLeft: "-1rem" }}
                >
                  Account details
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon="user-alt" />
                  </span>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  logout();
                  history.push("/");
                }}
              >
                Logout
                <span style={{ float: "right" }}>
                  <FontAwesomeIcon icon="sign-out-alt" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashbord-view">
          <Switch>
            <Route exact path={`${match.path}`} render={(props) => <MyAccount {...props} />} />
            <Route path={`${match.path}/payment-method`} component={PaymentDetails} />
            {/* <Route path={`${match.path}/address`} render={(props) => <Address {...props} />} /> */}
            <Route path={`${match.path}/address`} component={Address} />
            <Route path={`${match.path}/account-details`} component={AccountView} />
            <Route path={`${match.path}/orders`} component={OrderView} />
            <Route path={`${match.path}/download`} component={Download} />
            <Route path={`${match.path}/shipping`} component={Shipping} />
            <Route path={`${match.path}/billing`} component={Billing} />
          </Switch>
        </div>
      </div>
    </>
  );
}



const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
});

export default withRouter(connect(null, mapDispatchToProps)(DashBoard));
