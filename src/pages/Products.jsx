import React from 'react'
import Navbar from '../componants/shared/navbar/navbar';
import Header from '../componants/shared/header/header';
import ProductsContent from '../componants/products/productsContent/productsContent';
import SimilarProducts from '../componants/shared/similarProducts/similarProducts';
import Footer from '../componants/shared/footer/footer';


const Products = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ProductsContent/>
      <SimilarProducts/>
      <Footer />
    </>
  )
}

export default Products