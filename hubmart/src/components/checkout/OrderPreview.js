// import React,{useState} from "react";
// import { connect } from "react-redux";
// import { Field, reduxForm } from "redux-form";
// import { createStructuredSelector } from "reselect";
// import { placeOrder } from "../../actions/cart/actions";
// import { selectCart } from "../../reducers/cartReducer/selector";
// function OrderPreview({  cartItems,placeOrder}) {
//   // const renderField = ({ input, label, type, meta: { touched, error } }) => {
//   //   return (
//   //     <div>
//   //       <label className="label">{label}</label>
//   //       <div className="account-user-input">
//   //         <input {...input} type={type} />
//   //         {touched && error && <span>{error}</span>}
//   //       </div>
//   //     </div>
//   //   );
//   // };
//   const [name, setName] = useState("")
//   const [quantity, setQuantity] = useState("")
//   console.log(cartItems);
//   return (
//     <div>
//       {cartItems.map((cart) => {
//         return (
//           <form key={cart.id} >
//             <div className="order-header">
//               <p className="order-product">Product</p>
//               <p className="order-total">Subtotal</p>
//             </div>

//             <ul className="order-details1">
//               <li className="order-left-details">
//                 <input type="text" name="order" value={cart.name}  />X{" "}
//                 <input type="text" name="quantity" className="order-right-details1" value={cart.quantity}   /> <br />
//                 {/* <Field type="text" name="price" className="order-right-details1" value={cart.price} readOnly /> <br /> */}
//                 Vendor:
//               </li>
//               {/* <li className="order-right-details1">#{cart.price}</li> */}
//             </ul>
// {/*
//             <ul className="order-details2">
//               <li className="order-left-details">Subtotal</li>
//               <li className="order-right-details2">#800.00</li>
//             </ul> */}
// {/*
//             <ul className="order-details3">
//               <ul className="order-input">
//                 <li className="order-left-details">Shipping</li>
//                 <div className="order-flatrate">
//                   <input type="radio" />
//                   <p className="flatrate">Flat Rate:</p>
//                 </div>
//                 <div className="order-store">
//                   <input type="radio" />
//                   <p className="store">In-store pickup:</p>
//                 </div>
//               </ul>
//               <li className="order-right-details3">#1000.00</li>
//             </ul>
//             <div className="order-sumtotal">
//               <p className="order-details4">Total</p>
//               <p className="order-right-details4">#1800.00</p>
//             </div>
//             <h3 className="payment-header">Payment</h3>
//             <p className="order-payment">Debit/Credit Cards</p>
//             <p className="order-payment-mode">Make payment using your debit and credit cards</p>
//             <p className="order-note">
//               Your personal data will be used to process your order, support your experience
//               throughout this website,
//               <br /> and for other purposes described in our
//               <p className="order-note-color"> privacy policy.</p>
//             </p>
//             <div className="order-approval">
//               <input type="checkbox" />
//               <p className="order-approval-note">
//                 I have read and agree to the website{" "}
//                 <p className="approval-note">terms and conditions *</p>
//               </p>
//             </div> */}
//             <div className="order-payment-button">
//               <button onClick={() => placeOrder(name,quantity)}>Pay now</button>
//             </div>
//             <div className="back-button">
//               {/* <button type="button" onClick={previousPage}>
//                 {" "}
//                 Back to cart
//               </button> */}
//             </div>
//           </form>
//         );
//       })}
//     </div>
//   );
// }
// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCart,
// });
// export default connect(mapStateToProps,{placeOrder})(OrderPreview);
// // export default reduxForm({
// //   form: "checkoutform",
// //   destroyOnUnmount: false,
// //   forceUnregisterOnUnmount: true,
// //   enableReinitialize: true
// // })(orderPreview);

import React, { useState } from "react";
import { connect } from "react-redux";
import { placeOrder } from "../../actions/cart/actions";
import "./styles/checkout-login.scss";
const OrderPreview = ({ cart, placeOrder }) => {
  const [item, setItem] = useState("");
  const [unit, setUnit] = useState("");
  const [ordered, setOrdered] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist()
    alert(setItem, setUnit)
    const formValues = {
      setItem,setUnit, ordered
    }
    placeOrder(formValues)
  };
 
  return (
    <div>
      <div className="checkout-container">
      <p className='checkout-title'>Checkout</p>
      <div className="checkout-scroll">
      <div className="inflow-scroll"></div>
        <div className="first-scroll">
        <p className="first-scroll-writeup">1</p>
        </div>
          <p className="second-scroll">2</p>
        <div className="third-scroll">
        <p className="third-scroll-writeup">3</p>
        </div>
        <div className="fourth-scroll">
        <p className="fourth-scroll-writeup">4</p>
        </div>
        <div className="outflow-scroll"></div>
      </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="order"
          className="order-right-details"
          onChange={(e)=> setItem({ [e.target.name]: e.target.value })}
        />{" "}
        <br />
        <input
          type="text"
          name="quantity"
          className="order-right-details1"
          onChange={(e)=> setUnit({ [e.target.name]: e.target.value })}
        />{" "}
        <br />
        <input
          type="checkbox"
          name="ordered"
          className="order-right-details1"
          value={ordered}
        checked={ordered}
        hidden
        readOnly
        />{" "}
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCart,
// });
export default connect(null, { placeOrder })(OrderPreview);
