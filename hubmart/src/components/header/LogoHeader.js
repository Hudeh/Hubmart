import React, { useState } from "react";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Link,withRouter } from "react-router-dom";
import "./styles/header.scss";
import Logo from "../../assets/images/Logo.png";
import CartDropDown from "./cartDrop";
import Cart from "./cartIcon";
import { createStructuredSelector } from "reselect";
import { authUserSelector } from "../../reducers/authReducer/selector";
import { CartHiddenDrop, UserDropDownSelector } from "../../reducers/headerReducer/selector";
import { toggleUserDropHidden } from "../../actions/header/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserDropDown from "./UserDropDown";

// scroll function for sticky header
document.addEventListener("DOMContentLoaded", function (history) {
  window.onscroll = function () {
    StickyScroll();
  };

  var header = document.getElementById("myheader");
  var sticky = header.offsetTop;

  function StickyScroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});
// end of scroll function*
const LogoHeader = ({ cartHidden, history, isAuthenticated, UserDropHidden, userDropDown }) => {
  //cart button at the top left used for opening  sidebar and closing
  var buttons = (
    <button
      onClick={() => {
        openNav();
        setbutton(
          (buttons = (
            <button
              onClick={() => {
                closeNav();
                setbutton(button);
              }}
            >
              x
            </button>
          ))
        );
      }}
    >
      &#9776;
    </button>
  );
  const [button, setbutton] = useState(buttons);

  return (
    <>
      <div className="header" id="myheader">
        <div className="carticon">{<button onClick={openNav}>&#9776;</button>}</div>
        <Link to="/">
          <div href="#default" className="logo">
            <img src={Logo} />
          </div>
        </Link>
        <div className="header-button">{button}</div>
        <div>
          <input type="text" className="header-searchInput" placeholder="Search for Produts" />
          <SearchIcon className="header-searchIcon" />
        </div>
        <div>
          {isAuthenticated ? (
            <FontAwesomeIcon icon="user" className="header-icon" onClick={UserDropHidden} />
          ) : (
            <FontAwesomeIcon icon="user" className="header-icon" onClick={UserDropHidden} />
          )}
        </div>
        <Cart />

        <p
          className="cart2"
          onClick={() => {
            history.push("/my-cart");
            console.log("working");
          }}
        >
          <FontAwesomeIcon icon="shopping-cart" />
          <span className="count-pro"></span>
        </p>
        {userDropDown ? null : <UserDropDown />}
        {cartHidden ? null : <CartDropDown />}
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  cartHidden: CartHiddenDrop,
  userDropDown: UserDropDownSelector,
  isAuthenticated: authUserSelector,
});
const mapDispatchToProps = (dispatch) => ({
  UserDropHidden: () => dispatch(toggleUserDropHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoHeader));

// sidebar open and close fuction
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("main").style.backgroundColor = "white";
}
// sidebar close fuction
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.backgroundColor = "white";
}
