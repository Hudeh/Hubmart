import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom'
import './styles/addresses.scss';
import Shipping from './Shipping';
import Billing from './Billing';

export default function Address(match) {
    return (
        <>
        <div >
            <p>The following addresses will be used on the checkout page by default.</p>
            <div className="addresses">
                <div className="address-billing">
                    <h4 style={{borderBottom:".1rem solid #F15A22"}}>Billing Address 
                        <span style={{float:'right', paddingRight:"25px"}}>
                        <Link style={{textDecoration:"none",color:'#F15A22'}} to={`${match.url}/billing`}>
                            Add
                        </Link>
                        </span>
                    </h4>
                    <p>You have not set up this type of address yet.</p>
                </div>
                <div className="address-shipping">
                    <h4 style={{borderBottom:".1rem solid #F15A22"}}>Shipping Address 
                        <span style={{float:'right',paddingRight:"25px"}}>
                        <Link style={{textDecoration:"none", color:'#F15A22'}} to={`${match.url}/shipping`}>
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

