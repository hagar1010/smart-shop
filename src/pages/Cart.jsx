import React from 'react'
import Navbar from '../componants/shared/navbar/navbar';
import Header from '../componants/shared/header/header';
import CartTable from '../componants/cart/cartTable/cartTable'
import SimilarProducts from '../componants/shared/similarProducts/similarProducts';
import Footer from '../componants/shared/footer/footer';

const Cart = () => {
    return (
        <>
            <Navbar />
            <Header />
            <CartTable />
            <SimilarProducts />
            <Footer />
        </>
    )
}

export default Cart