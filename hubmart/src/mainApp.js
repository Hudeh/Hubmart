import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux'
import { Switch, Route, Redirect} from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSignOutAlt,
  faUserAlt,
  faDownload,
  faPaperPlane,
  faHome,
  faCreditCard,
  faShoppingBasket,
  faTachometerAlt,
  faClock,
  faTruck,
  faCartArrowDown,
  faMapMarkerAlt,
  faUser,
  faTh,
  faGripVertical,
  faThLarge,
  faGripLinesVertical,
  faTrashAlt,
  faShoppingCart,
  faSearch,
  faLongArrowAltRight,
  faCheck

} from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";
import "swiper/swiper-bundle.css";
import Shop from './components/product/Shop';
import HomePage from "./components/main/Home";
import Layout from "./components/main/Layout";
import ProductDetail from "./components/product/ProductDetail";
import DashBoard from "./components/dashboard/DashBoard";
import AuthLayout from "./components/auth/AuthLayout";
import TrackOrders from "./components/product/TrackOrders";
import ViewCartPage from "./components/dashboard/ViewCartPage";
import PrivateRoute from "./components/main/PrivateRoute";
import {loadUser} from './actions/auth/actions'
import CheckoutForm from './components/checkout/CheckOutPage';
import setAuthToken from './utils/setAuthToken';



library.add(
  faStar,
  faSignOutAlt,
  faUserAlt,
  faDownload,
  faPaperPlane,
  faThLarge,
  faCartArrowDown,
  faMapMarkerAlt,
  faUser,
  faTh,
  faGripVertical,
  faGripLinesVertical,
  faHome,
  faCreditCard,
  faShoppingBasket,
  faTachometerAlt,
  faClock,
  faTruck,
  faTrashAlt,
  faShoppingCart,
  faSearch,
  faLongArrowAltRight,
  faCheck
);


if (localStorage.token) setAuthToken(localStorage.token);




const MainApp = () =>{

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser());
    return () => {
      // 
    }
  }, []);
        return (
            <Layout>
           <Switch>
             <div id="content">
               <PrivateRoute exact path="/my-account" component={DashBoard} />
               <Route exact={true} path="/" component={HomePage} />
               <Route path="/products/:id" component={ProductDetail} />
               <Route path="/shop" component={Shop} />
               <Route path="/track-your-order" component={TrackOrders} />
               <Route path="/my-cart" component={ViewCartPage} />
               <Route path="/check-out" component={CheckoutForm} />
               <Route path="/login-signup" component={AuthLayout} />
             </div>
           </Switch>
         </Layout>
        )
    }



export default connect(null,{loadUser})(MainApp);

