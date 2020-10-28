import React,{ useEffect }  from "react";
import "./styles/featuredproducts.scss";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addCartItems } from "../../actions/cart/actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cake from "../../assets/images/cake.jpg";
import {
  AllProductSelector,
  isLoadingSelector,
} from "../../reducers/productReducer/selector";
import { fetchAllProducts} from "../../actions/products/actions";
import { productsDisplay} from "./utils/tabOpen";
import {formatter} from '../../utils/currencyFormater'


const  FeatureProducts = ({isLoading,allProducts,addCartItems}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts())
    return () => {
      // cleanup
    }
  }, [])
  const ShopProducts = allProducts.map((product) => {
    return ( 
    
      <div className="product_card">
        <div className="product_heading">
          <span className="product_slug">{product.category}</span>
          <Link className="product_links">
            <div className="product_thumbnail">
              <img src={product.image} alt="product_thumbnail" />
            </div>
            <h2 className='product_title'>{product.name}</h2>
          </Link>
        </div>
        <div className='product_addcart_price'>
          <span className='span'>{formatter.format(product.price)}</span>
          <div className='product_addcart'>
            <button onClick={()=> addCartItems(product)}><FontAwesomeIcon icon='shopping-cart' /> Add to cart</button>
          </div>
        </div>
      </div>
  )})
  return (
    <div className="products">
      <button
        className="productlinks active"
        onClick={(event) => productsDisplay(event, "Featured Products")}
      >
        Featured Products
      </button>
      <button className="productlinks" onClick={(event) => productsDisplay(event, "Best Selling")}>
        Best Selling
      </button>
      <button
        className="productlinks"
        onClick={(event) => productsDisplay(event, "Top Rated Products")}
      >
        Top Rated Products
      </button>
      <div id="Featured Products" className="productcontent" style={{ display: "flex" }}>
  {ShopProducts}
      </div>

      <div id="Best Selling" className="productcontent">
      {ShopProducts}
      </div>
      <div id="Top Rated Products" className="productcontent">
      {ShopProducts}
      </div>
    </div>
  );
}

const mapStateToPros = createStructuredSelector({
  allProducts: AllProductSelector,
  isLoading: isLoadingSelector,
});

export default connect(mapStateToPros, { fetchAllProducts, addCartItems }) (FeatureProducts)