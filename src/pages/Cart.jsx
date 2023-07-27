import React,{useState} from 'react'
import Navbar from '../componants/shared/navbar/navbar';
import Header from '../componants/shared/header/header';
import CartTable from '../componants/cart/cartTable/cartTable'
import SimilarProducts from '../componants/shared/similarProducts/similarProducts';
import Footer from '../componants/shared/footer/footer';

const Cart = () => {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
    return (
        isLoading ?
        <h1 style={{ fontSize: 70, color: "#999", textAlign:"center", marginTop:300 }}>LOADING&nbsp;&nbsp;&nbsp;<div className="dot-pulse"></div></h1>
        :
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