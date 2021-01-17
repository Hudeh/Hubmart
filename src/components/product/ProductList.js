import React from "react";
import _ from "lodash";
import Products from "./Products";
import PropTypes from "prop-types";

const ProductList = (props) => {
  let productCollections = _.map(props.Products, (product, idx) => {
    return <Products key={idx} product={product} addCartItems={props.addCartItems} />;
  });
  return <>
  {productCollections}
  </>;
};
ProductList.propTypes = {
  Products: PropTypes.array,
  addCartItems: PropTypes.func.isRequired,
};

export default ProductList;
