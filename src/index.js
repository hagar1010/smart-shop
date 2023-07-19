import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProductPage from './pages/SinleProductPage';
import Cart from "./pages/Cart"
import Signup from "./pages/Signup"
import Login from './pages/Login';


import  Store  from "./store/store"
import { Provider } from 'react-redux'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Products/:id' element={<SingleProductPage />} /> {/*check path*/}
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </React.StrictMode>
   </Provider>
);
