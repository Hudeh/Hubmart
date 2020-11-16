import React from 'react'
import {Link} from "react-router-dom";
import Shipping from "./Shipping";
import Billing from "./Billing";
import { Switch, Route} from "react-router-dom";
export default function Details({match}) {
    return (
        <>
      <div>
        <p>The following addresses will be used on the checkout page by default.</p>
        <div className="addresses">
          <div className="address-billing">
            <h4 style={{ borderBottom: ".1rem solid #F15A22" }}>
              Billing Address
              <span style={{ float: "right", paddingRight: "25px" }}>
                <Link
                  style={{ textDecoration: "none", color: "#F15A22" }}
                  to={`${match.path}/billing`}
                >
                  Add
                </Link>
              </span>
            </h4>
            <p>You have not set up this type of address yet.</p>
          </div>
          <div className="address-shipping">
            <h4 style={{ borderBottom: ".1rem solid #F15A22" }}>
              Shipping Address
              <span style={{ float: "right", paddingRight: "25px" }}>
                <Link
                  style={{ textDecoration: "none", color: "#F15A22" }}
                  to={`${match.path}/shipping`}
                >
                  Add
                </Link>
              </span>
            </h4>
            <p>You have not set up this type of address yet.</p>
          </div>
        </div>
      </div>
    </>
    )
}
