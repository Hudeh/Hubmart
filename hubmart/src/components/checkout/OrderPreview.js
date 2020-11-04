import React from "react";
import { reduxForm } from "redux-form";
function OrderPreview(props) {
  const { previousPage } = props;
  return (
    <div>
      <div className="order-header">
        <p className="order-product">Product</p>
        <p className="order-total">Subtotal</p>
      </div>

      <ul className="order-details1">
        <li className="order-left-details">
          TWININGS GREEN TEA & APPLE 50G × <br />
          Vendor:
        </li>
        <li className="order-right-details1">#800.00</li>
      </ul>

      <ul className="order-details2">
        <li className="order-left-details">Subtotal</li>
        <li className="order-right-details2">#800.00</li>
      </ul>

      <ul className="order-details3">
        <ul className="order-input">
          <li className="order-left-details">Shipping</li>
          <div className="order-flatrate">
            <input type="radio" />
            <p className="flatrate">Flat Rate:</p>
          </div>
          <div className="order-store">
            <input type="radio" />
            <p className="store">In-store pickup:</p>
          </div>
        </ul>
        <li className="order-right-details3">#1000.00</li>
      </ul>
      <div className="order-sumtotal">
        <p className="order-details4">Total</p>
        <p className="order-right-details4">#1800.00</p>
      </div>
      <h3 className="payment-header">Payment</h3>
      <p className="order-payment">Debit/Credit Cards</p>
      <p className="order-payment-mode">
        Make payment using your debit and credit cards
      </p>
      <p className="order-note">
        Your personal data will be used to process your order, support your
        experience throughout this website,
        <br /> and for other purposes described in our
        <p className="order-note-color"> privacy policy.</p>
      </p>
      <div className="order-approval">
        <input type="checkbox" />
        <p className="order-approval-note">
          I have read and agree to the website <p className="approval-note">
          terms and conditions *</p>
        </p>
      </div>
      <div className='order-payment-button'>
      <button type='button'>Pay now</button>
      </div>
     <div className="back-button">
      <button type="button" onClick={previousPage}>
        {" "}
        Back to cart
      </button>
      </div>
    </div>
  );
}
export default reduxForm({
  form: "checkoutform",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(OrderPreview);
