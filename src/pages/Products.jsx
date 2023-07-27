import React from 'react'
import Navbar from '../componants/shared/navbar/navbar';
import Header from '../componants/shared/header/header';
import ProductsSidebar from '../componants/products/productsSidebar/productsSidebar';
import SimilarProducts from '../componants/shared/similarProducts/similarProducts';
import Footer from '../componants/shared/footer/footer';


const Products = () => {
  return (
      <>
        <Navbar />
        <Header />
        <ProductsSidebar />
        <SimilarProducts />
        <Footer />
      </>
  )
}

export default Products