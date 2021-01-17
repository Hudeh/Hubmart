import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatter } from "../../utils/currencyFormater";
import PropTypes from "prop-types";

class Products extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity:1
    }
  }
  render(){
const {product} = this.props;
  return (
    <div className="product_card">
      <div className="product_heading">
        <span className="product_slug">{product.category}</span>
        <Link className="product_links" to={`/products/${product.id}/${product.item}`}>
          <div className="product_thumbnail">
            <img src={product.image} alt="product_thumbnail" />
          </div>
          <h2 className="product_title">{product.item}</h2>
        </Link>
      </div>
      <div className="product_addcart_price">
        <span className="span">₦{product.price}</span>
        <div className="product_addcart">
          <button
            onClick={() => {
              this.props.addCartItems(product, this.state.quantity);
            }}
          >
            <FontAwesomeIcon icon="shopping-cart" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
          }
};
Products.propTypes = {
  product: PropTypes.object.isRequired,
  addCartItems: PropTypes.func.isRequired,
};

export default Products;
