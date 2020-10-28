import React from "react";
import { Link, NavLink, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/dashboard.scss";
import OrderView from "./OrderView";
import Billing from "./Billing";
import Shipping from "./Shipping";
import AccountView from "./AccountView";
import MyAccount from "./MyAccount";
import MainApp from "../main/Home";
import Download from "./Download";
import PaymentDetails from "./PaymentDetails";
import Address from "./Address";
import { createStructuredSelector } from "reselect";
import { logoutUser } from "../../actions/auth/actions";
import { currentUserSelector } from "../../reducers/authReducer/selector";

function DashBoard({ match, currentUser, logout, history }) {
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
                  to={`${match.url}/orders`}
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
                  to={`${match.url}/downloads`}
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
                  to={`${match.url}/payment-method`}
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
                  to={`${match.url}/account-details`}
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
            <Route path={`${match.path}/orders`}>
              <OrderView />
            </Route>
            <Route path={`${match.path}/account-details`}>
              <AccountView />
            </Route>
            <Route path={`${match.path}/shipping`}>
              <Shipping />
            </Route>
            <Route path={`${match.path}/downloads`}>
              <Download />
            </Route>
            <Route path={`${match.path}/payment-method`}>
              <PaymentDetails />
            </Route>
            <Route path={`${match.path}/address`}>
              <Address {...match} />
            </Route>
            <Route path={`${match.path}/logout`}>
              <MainApp />
            </Route>
            <Route path={`${match.path}/billing`}>
              <Billing />
            </Route>
            <Route path={`${match.path}/shipping`}>
              <Shipping />
            </Route>
            <Route path={`${match.path}`}>
              <MyAccount currentUser={currentUser} logout={logout} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashBoard));
