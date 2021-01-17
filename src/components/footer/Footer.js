import React from 'react';
import './styles/footer.scss';
import Logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <>
        <div className="footer">
            <div className="newsletter">
                <div className="news-img">
                <p style={{fontSize:"30px", marginLeft:"1rem"}}><FontAwesomeIcon icon="paper-plane" /></p>
                </div>
                <p style={{fontSize:"30px", marginRight:"2rem"}}>Newsletter Sign up</p>
                    <p>...be the first to know about our deals and promos</p>
                    <input type="text"  placeholder="Enter your email" className="news-email"/><span><button className='submit'>Sign Up</button></span>
            </div>
            <div className="footer-menu">
                <div className="img-logo">
            <img src={Logo} alt="logo" height="80px" width="240px"/>
             </div>
                <div className="footer-menu-link1">
                    <p>Hubmart Stores H.Q </p>
                    <p>35 Adeola Odeku Street, Victoria Island, Lagos</p>
                </div>
                <div className="footer-menu-link2">
                    <p>Get to know us</p>
                    <p>Corporate Purchase</p>
                    <p>Careers</p>
                    <p>Be a vendor</p>
                    <p>Contact us</p>
                </div>
                <div className="footer-menu-link3">
                    <p>Join the hublife</p>
                    <p>Promotions</p>
                    <p>Weekly Ad</p>
                    <p>Locate a store</p>
                    <p>Newsletter Sign up</p>
                </div>
                <div className="footer-menu-link4">
                    <p> My Account </p>
                    <p>    Track your Order </p>
                    <p>    Returns & Exchange </p>
                    <p>    Wishlist </p>
                    <p>    FAQ </p>
                </div>
                <div className="footer-menu-link5">
                    <p>Secure payment with:</p>
                    <p> Hubmart Delivery</p>
                    <p>Fast Delivery by:</p>
                </div>
            </div>
            </div>
        <footer className="copyright">
         <p>&copy; Hubmart Stores Limited - All Rights Reserverd</p>
        </footer>
        </>
    )
}
