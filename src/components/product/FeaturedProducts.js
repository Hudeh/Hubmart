import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import "./styles/featuredproducts.scss";
import { addCartItems } from "../../actions/cart/actions";
import loading from "../../assets/images/loader.gif";
import { AllProductSelector, isLoadingSelector } from "../../reducers/productReducer/selector";
import { fetchAllProducts } from "../../actions/products/actions";
import { productsDisplay } from "./utils/tabOpen";
import ProductList from "./ProductList";

class FeatureProducts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchAllProducts();
    }, 300);
  }
  render() {
    const { isLoading, Products, addCartItems } = this.props;
    return (
      <div className="products">
        <button
          className="productlinks active"
          onClick={(event) => productsDisplay(event, "Featured Products")}
        >
          Featured Products
        </button>
        <button
          className="productlinks"
          onClick={(event) => productsDisplay(event, "Best Selling")}
        >
          Best Selling
        </button>
        <button
          className="productlinks"
          onClick={(event) => productsDisplay(event, "Top Rated Products")}
        >
          Top Rated Products
        </button>
        <div id="Featured Products" className="productcontent" style={{ display: "flex" }}>
          {Products.length ? (
            <ProductList Products={Products} addCartItems={addCartItems} />
          ) : (
            <div>
              <img src={loading} alt="loading" />
            </div>
          )}
        </div>

        <div id="Best Selling" className="productcontent">
          {Products.length ? (
            <ProductList Products={Products} addCartItems={addCartItems} />
          ) : (
            <div>
              <img src={loading} alt="loading" />
            </div>
          )}
        </div>
        <div id="Top Rated Products" className="productcontent">
          {Products.length ? (
            <ProductList Products={Products} addCartItems={addCartItems} />
          ) : (
            <div>
              <img src={loading} alt="loading" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

FeatureProducts.propTypes = {
  Products: PropTypes.array,
  fetchAllProducts: PropTypes.func.isRequired,
  addCartItems: PropTypes.func.isRequired,
};

const mapStateToPros = createStructuredSelector({
  Products: AllProductSelector,
  isLoading: isLoadingSelector,
});

export default connect(mapStateToPros, { fetchAllProducts, addCartItems })(FeatureProducts);
