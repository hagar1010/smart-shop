import React from 'react'
import Navbar from '../componants/shared/navbar/navbar';
import Header from '../componants/shared/header/header';

import SimilarProducts from '../componants/shared/similarProducts/similarProducts';
import Footer from '../componants/shared/footer/footer';

const Cart = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div>Cart</div>
            <SimilarProducts />
            <Footer />
        </>
    )
}

export default Cart