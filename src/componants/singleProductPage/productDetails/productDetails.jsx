import React from 'react'
import "./productDetails.css"

import whats from "../../../assets/images/WhatsApp.png";
import youtube from "../../../assets/images/Youtube.png";
import facebook from "../../../assets/images/Facebook.png";
import twitter from "../../../assets/images/Twitter.png";

import mainImg from '../../../assets/images/mainImg.png'
import detailImg1 from '../../../assets/images/detailImg1.png'
import detailImg2 from '../../../assets/images/detailImg2.png'
import detailImg3 from '../../../assets/images/detailImg3.png'

import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";




const ProductDetails = () => {
    return (
        <section className="product-details">
            <div className="details">
                <h2>فستان ازرق عصري</h2>
                <p>ج.م 1800&nbsp;&nbsp;-&nbsp;&nbsp;<span>ج.م 2000</span></p>
                <div className="pro-rate">
                    <p>(50)</p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <p>مثل هذا النص او العديد من النصوص الاخرى اضافة الى زيادة عدد الحروف التي يولدها التطبيق</p>
                <h3>: اللون</h3>
                <div className='colors-btns'>
                    <button className='green'></button>
                    <button className='purple'></button>
                    <button className='blue'></button>
                    <button className='yellow'></button>
                    <button className='red'></button>
                </div>
                <h3>: الحجم</h3>
                <div className="sizes">
                    <span>XL</span>
                    <span>L</span>
                    <span>M</span>
                    <span>S</span>
                </div>

                <button className="addCart-btn">اضف للسلة</button>
                <input type="number"/>

                <div className='fav'>
                    <p>اضف للمفضلة</p>
                    <AiOutlineHeart />
                </div>
                <button className='buy-now'>اشتري الان</button>
                <h4>شارك عبر مواقع التواصل</h4>
                <div className='share'>
                    <img src={whats} alt="" />
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
            <div class="product-mainImg">
                <img src={mainImg} alt="" />
                <div className="detail-imgs">
                    <img src={detailImg1} alt="" />
                    <img src={detailImg2} alt="" />
                    <img src={detailImg3} alt="" />
                    <img src={detailImg2} alt="" />
                    <img src={detailImg3} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ProductDetails