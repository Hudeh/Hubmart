import React from 'react'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store/index';
import "react-slideshow-image/dist/styles.css";
import "swiper/swiper-bundle.css";
import MainApp from './mainApp';


function App() {
  return (
    <Provider store={store}>
      <Router>
      <PersistGate persistor={persistor}>
    <MainApp />
    </PersistGate>
    </Router>
    </Provider>
  );
}
export default App;
