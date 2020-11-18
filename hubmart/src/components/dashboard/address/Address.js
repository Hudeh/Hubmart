import React, { useEffect } from "react";
import { connect,useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/addresses.scss";
import { fetchAddressBook } from "../../../actions/auth/actions";
import { addressSelector, shippingSelector } from "../../../reducers/authReducer/selector";
import { createStructuredSelector } from "reselect";


const Address = ({ match, shipping_address, billing_address }) => {
// const shipping = useSelector(state => state.authReducer.shipping)
const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchAddressBook());
  return () => {
    //
  };
}, []);
  return (
    <>
      <div>
        <p>The following addresses will be used on the checkout page by default.</p>
        <div className="addresses">
          <div className="address-billing">
            <h4 style={{ borderBottom: ".1rem solid #F15A22" }}>
              Billing Address
              {billing_address ?<span style={{ float: "right", paddingRight: "25px" }}>
                <Link
                  style={{ textDecoration: "none", color: "#F15A22" }}
                  to={`${match.path}/billing`}
                >
                  Edit
                </Link>
              </span>:
              <span style={{ float: "right", paddingRight: "25px" }}>
              <Link
                style={{ textDecoration: "none", color: "#F15A22" }}
                to={`${match.path}/billing`}
              >
                Add
              </Link>
            </span>
              }
            </h4>
            {billing_address.length  ? (billing_address.map(add => {
              return <div key={add.id}>
                <div>{add.street_address}</div>
                <div>{add.phone}</div>
                <div>{add.country}</div>
              </div>
            })): (<p>You have not set up this type of address yet.</p>)
            }
          </div>
          <div className="address-shipping">
            <h4 style={{ borderBottom: ".1rem solid #F15A22" }}>
              Shipping Address
              {shipping_address ?<span style={{ float: "right", paddingRight: "25px" }}>
                <Link
                  style={{ textDecoration: "none", color: "#F15A22" }}
                  to={`${match.path}/billing`}
                >
                  Edit
                </Link>
              </span>:
              <span style={{ float: "right", paddingRight: "25px" }}>
              <Link
                style={{ textDecoration: "none", color: "#F15A22" }}
                to={`${match.path}/billing`}
              >
                Add
              </Link>
            </span>
              }
            </h4>
            { shipping_address.length ? <div>Your Shipping Address Here</div> :
              <p>You have not set up this type of address yet.</p>}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  shipping_address :shippingSelector,
  billing_address: addressSelector
})
export default connect(mapStateToProps)(Address);