import React from 'react'

import Navbar from '../componants/shared/navbar/navbar';//shared
import HeaderAdvSlider from '../componants/home/headerAdvSlider/headerAdvSlider';
import Features from '../componants/home/features/features';
import Discount from '../componants/home/discount/discount';
import NewProducts from '../componants/home/newProducts/newProducts';//useing shared
import LimitedOffer from '../componants/home/limitedOffer/limitedOffer';
import CategoriesShopping from '../componants/home/categoriesShopping/categoriesShopping';//useing shared
import Brands from '../componants/home/brands/brands';
import Gallary from '../componants/home/gallary/gallary';
import Footer from '../componants/shared/footer/footer';//shared


const Home = () => {
    return (
        <>
            <Navbar/>
            <HeaderAdvSlider />
            <Features />
            <Discount />
            <NewProducts />
            <LimitedOffer/>
            <CategoriesShopping/>
            <Brands/>
            <Gallary/>
            <Footer/>
        </>
    )
}

export default Home