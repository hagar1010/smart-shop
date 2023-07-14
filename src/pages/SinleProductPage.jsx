import React from 'react'
import Navbar from '../componants/shared/navbar/navbar';
import Header from '../componants/shared/header/header';
import ProductDetails from '../componants/singleProductPage/productDetails/productDetails'
import Review from '../componants/singleProductPage/review/review'
import SimilarProducts from '../componants/shared/similarProducts/similarProducts';
import Footer from '../componants/shared/footer/footer';

// import { useParams } from 'react-router-dom';


const SingleProductPage = () => {
    // const { id } = useParams();
    return (
        <>
            <Navbar />
            {/* <div>This is product : {id}</div> */}
            <Header/>
            <ProductDetails/>
            <Review/>
            <SimilarProducts/>
            <Footer/>
        </>
    )
}

export default SingleProductPage