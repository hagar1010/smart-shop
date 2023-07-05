import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './componants/shared/navbar/navbar';
import HeaderAdvSlider from './componants/home/headerAdvSlider/headerAdvSlider';
import Features from './componants/home/features/features';
import Discount from './componants/home/discount/discount';
import NewProducts from './componants/home/newProducts/newProducts';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <HeaderAdvSlider/>
    <Features/>
    <Discount/>
    <NewProducts/>
  </React.StrictMode>
);
