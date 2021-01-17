import React, { useState } from "react";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link, withRouter } from "react-router-dom";
import "./styles/header.scss";
import Logo from "../../assets/images/Logo.png";
import CartDropDown from "./cartDrop";
import Cart from "./cartIcon";
import { openNav, closeNav } from "./util";
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

const LogoHeader = ({ history, isAuthenticated }) => {
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
  const [open, setOpen] = useState(false);
  const [cartHidden, setCartHidden] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const handleCartHidden = () => {
    setCartHidden((prev) => !prev);
  };

  const handleCartHiddenAway = () => {
    setCartHidden(false);
  };

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
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            {isAuthenticated ? (
              <FontAwesomeIcon icon="user" className="header-icon" onClick={handleClick} />
            ) : (
              <FontAwesomeIcon icon="user" className="header-icon" onClick={handleClick} />
            )}
            {open ? <UserDropDown /> : null}
          </div>
        </ClickAwayListener>
        <ClickAwayListener onClickAway={handleCartHiddenAway}>
          <div>
            <Cart handleCartHidden={handleCartHidden} />
            {cartHidden ? <CartDropDown handleCartHidden={handleCartHidden} /> : null}
          </div>
        </ClickAwayListener>

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
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  cartHidden: CartHiddenDrop,
  isAuthenticated: authUserSelector,
});
const mapDispatchToProps = (dispatch) => ({
  UserDropHidden: () => dispatch(toggleUserDropHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoHeader));
