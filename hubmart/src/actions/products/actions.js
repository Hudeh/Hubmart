import {
    FETCH_ALL_PRODUCT,
    FETCH_ALL_PRODUCT_FAILS,
    FETCH_ALL_PRODUCT_SUCCESS,
    FETCH_SINGLE_PRODUCT_DETAILS_SUCCESS,
    FETCH_SINGLE_PRODUCT_DETAILS,
    FETCH_SINGLE_PRODUCT_DETAILS_FAILS,
  } from "./types";
  import axios from '../../utils/Api'

  
  // DISPATCH PRODUCT_LOADING
  export const loadAllProduct = () => dispatch => dispatch({type:FETCH_ALL_PRODUCT})
  
  // FETCH PRODUCTs
  export const fetchAllProducts = () => async(dispatch) => {
    dispatch(loadAllProduct())
    try {
      
      const res = await axios.get('/api/products/')
      dispatch({type:FETCH_ALL_PRODUCT_SUCCESS,payload:res.data})
    } catch (error) {
      dispatch({type:FETCH_ALL_PRODUCT_FAILS, payload:error.message})
    }
  }
  
  // fetch single product load 
  export const loadSingleProduct = () =>{
    return{
      type: FETCH_SINGLE_PRODUCT_DETAILS,
    }
  }
  
  export const fetchSingleProduct = productId => async(dispatch) =>{
    try {
      const res = await axios.get(`/api/products/${productId}`)
      dispatch({
        type: FETCH_SINGLE_PRODUCT_DETAILS_SUCCESS,
        payload:res.data
      });
    } catch (error) {
      dispatch({type: FETCH_SINGLE_PRODUCT_DETAILS_FAILS, payload: error.message})
    }
  };