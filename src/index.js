import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProductPage from './pages/SinleProductPage';
import Cart from "./pages/Cart"







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path=':id' element={<SingleProductPage/>} /> {/*check path*/}
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
