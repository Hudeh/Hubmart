import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Shipping from "./Shipping";
import Billing from "./Billing"
import Login from "./Login";
import OrderPreview from "./OrderPreview";
import "./styles/accountDetails.scss";
import { currentUserSelector } from "../../reducers/authReducer/selector";
import { placeOrder } from "../../actions/cart/actions";
import { selectCart } from "../../reducers/cartReducer/selector";
import { createStructuredSelector } from "reselect";
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const {currentUser,cartItems } = this.props;
    const cartItem = cartItems.map(cart => {return <OrderPreview key={cart.id} cart={cart} />})
    const { page } = this.state;
    return (
      <div>
        {currentUser ? (
          <div>
            {page === 1 && <Billing onSubmit={this.nextPage} />}
            {page === 2 && <Shipping previousPage={this.previousPage} onSubmit={this.nextPage} />}
            {page === 3 && cartItem }
          </div>
        ) : (
          <div>
            {page === 1 && <Login onSubmit={this.nextPage} />}
            {page === 2 && <Billing onSubmit={this.nextPage} previousPage={this.previousPage} />}
            {page === 3 && <Shipping previousPage={this.previousPage} onSubmit={this.nextPage} />}
            {page === 4 && cartItem}
          </div>
        )}
      </div>
    );
  }
}

// CheckoutForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  cartItems : selectCart
});

export default connect(mapStateToProps,{placeOrder})(CheckoutForm);
