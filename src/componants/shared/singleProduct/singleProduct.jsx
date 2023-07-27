import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import './singleProduct.css'
import { Link } from 'react-router-dom';
import axios from 'axios';




const SingleProduct = ({ product }) => {     //keys in <Singlpro> in parent   (ممكن اكتر من بارا)

    const addCart = () => {
        axios
            .post("http://localhost:8000/cart", product)
            .then(res => {
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const [like, setlike] = useState(false);
    const changeLike = () => {
        setlike(!like)
        product.like = !like
    };

    //--------size part----------
    const sizesList = ["XS", "S", "M", "L", "XL"]

    return (
        <div className='single-pro'>
            <div className="product-img">
                <Link to={`/Products/${product.id}`}>
                    <img src={product.image} />
                    <div className="layer">
                        {/* <Link to=""> */}
                        <p onClick={() => {
                            // addCart(product)
                        }}>اضف للعربة</p>
                        {/* </Link> */}
                    </div>
                </Link>

                <button className='like'>
                    {product.like ?
                        <AiFillHeart onClick={() => {
                            changeLike()
                        }} />
                        :
                        <AiOutlineHeart onClick={() => {
                            changeLike()
                        }} />
                    }
                </button>
            </div>

            <div className="pro-info">
                <div className="price">
                    <h5>{product.price}</h5>
                    <p>{product.price_before}</p>
                </div>
                <div>
                    <div className="rating">
                        {
                            sizesList.filter((item, length) => length < 5 - product.rating).map((item,index) => {
                                return <AiOutlineStar  key={index}/>
                            })
                        }
                        {
                            sizesList.filter((item, length) => length < product.rating).map((item,index) => {
                                return <AiFillStar key={index}/>
                            })
                        }
                    </div>
                    <h4>{product.name}</h4>
                    <div className="pro-size">
                        {sizesList.map((sizes, index) => {
                            if (product.size == sizes) {
                                return <span className='active-size' key={index}>{sizes}</span>
                            } else {
                                return <span key={index}>{sizes}</span>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct

