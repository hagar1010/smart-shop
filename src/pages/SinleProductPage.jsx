import React from 'react'
import Navbar from '../componants/shared/navbar/navbar';
import Footer from '../componants/shared/footer/footer';

import { useParams } from 'react-router-dom';


const SingleProductPage = () => {
    const { id } = useParams();
    return (
        <>
            <Navbar />
            <div>SingleProductPage</div>
            <div>This is product : {id}</div>
            <Footer/>
        </>
    )
}

export default SingleProductPage