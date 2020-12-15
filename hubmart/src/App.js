import React from 'react'
import {Provider} from 'react-redux';
import './index.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store/index';
import "react-slideshow-image/dist/styles.css";
import "swiper/swiper-bundle.css";
import MainApp from './mainApp';

const NotFoundPage = () => {
  return <h1>404 Page NotFound</h1>;
}
function App() {
  return (
    
    <div className='bg-img'>

   
    <Provider store={store}>
      <Router>
      <PersistGate persistor={persistor}>
        <Switch>

    <MainApp />
    <Route component={NotFoundPage}/>
        </Switch>
    </PersistGate>
    </Router>
    </Provider>
     </div>
     
  );
}
export default App;
