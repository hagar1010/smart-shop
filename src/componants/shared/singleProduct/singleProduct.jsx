import React from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

import './singleProduct.css'
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {     //keys in <Singlpro> in parent   (ممكن اكتر من بارا)
    return (
        <div className='single-pro'>
            <div className="product-img">
                <Link to={product.id}><img src={product.image} /></Link>
                <div class="layer">
                    <p>اضف للعربة</p>
                </div>
                <button className='like'>
                    <AiOutlineHeart />
                </button>
            </div>

            <div className="pro-info">
                <div className="price">
                    <h5>{product.price}</h5>
                    <p>{product.price_before}</p>
                </div>
                <div>
                    <div className="rating">
                        <AiOutlineStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <h4>{product.name}</h4>
                    <div className="pro-size">
                        <span>XL</span>
                        <span>L</span>
                        <span>M</span>
                        <span>S</span>
                        <span style={{ background: "#7FD3DF", color: "#fff" }}>XS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct

