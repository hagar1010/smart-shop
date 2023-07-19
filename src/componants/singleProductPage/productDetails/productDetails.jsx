import React, { useState } from 'react'
import "./productDetails.css"

import whats from "../../../assets/images/WhatsApp.png";
import youtube from "../../../assets/images/Youtube.png";
import facebook from "../../../assets/images/Facebook.png";
import twitter from "../../../assets/images/Twitter.png";

// import mainImg from '../../../assets/images/mainImg.png'
import detailImg1 from '../../../assets/images/detailImg1.png'
import detailImg2 from '../../../assets/images/detailImg2.png'
import detailImg3 from '../../../assets/images/detailImg3.png'


import pro1 from '../../../assets/images/1.png'
import pro2 from '../../../assets/images/2.png'
import pro3 from '../../../assets/images/3.png'
import pro4 from '../../../assets/images/4.png'
import pro5 from '../../../assets/images/5.png'
import pro6 from '../../../assets/images/6.png'
import pro7 from '../../../assets/images/7.png'
import pro8 from '../../../assets/images/8.png'
import pro9 from '../../../assets/images/9.png'
import pro10 from '../../../assets/images/10.png'
import pro11 from '../../../assets/images/11.png'



import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useParams } from 'react-router-dom';


import { addToCart } from '../../../store/cartSlice';
import { useDispatch } from 'react-redux';


const ProductDetails = () => {
    const { id } = useParams();
    const productsData = [
        {
            id: "1",
            name: "فستان سهرات ازرق",
            desc: "هذا افستان تبع المنتج رقم 9 الصورة مش كيوت  واخيرااا هييي",
            image: pro1,
            price: "ج.م 410",
            price_before: "ج.م 440",
            rating: 4,
            size: "XL",
            colors: ["red", "blue"],
            like: false
        },
        {
            id: "2",
            name: "شيرت منزلي رجالي",
            desc: "هذا الشيرت رجالي تبع المنتج رقم 2 الصورة مش كيوت للمرة التانيه طفشت",
            image: pro2,
            price: "ج.م 250",
            price_before: "ج.م 300",
            rating: 3,
            size: "XL",
            colors: ["red", "green", "blue"],
            like: false
        },
        {
            id: "3",
            name: "بلوزة اطفال بناتي",
            desc: "هذا اللبس تبع المنتج رقم 3 الصورة مش كيوت بلابلابلابل بلا ليلو",
            image: pro3,
            price: "ج.م 500",
            price_before: "ج.م 550",
            rating: 5,
            size: "L",
            colors: ["yellow", "blue"],
            like: false
        },
        {
            id: "4",
            name: "قميص رجالي",
            desc: "هذا القميص رجالي تبع المنتج رقم 4 الصورة مش كيوت عشان كده لازم داتا جاهزة ده حوار",
            image: pro4,
            price: "ج.م 850",
            price_before: "ج.م 900",
            rating: 2,
            size: "XS",
            colors: ["green", "purple"],
            like: false
        },
        {
            id: "5",
            name: "جاكيت اطفال",
            desc: "هذا الجاكيت تبع المنتج رقم 9 الصورة مش كيوت طفشت من الهبد مجهود",
            image: pro5,
            price: "ج.م 700",
            price_before: "ج.م 750",
            rating: 4,
            size: "L",
            colors: ["red", "purple", "blue"],
            like: false
        },
        {
            id: "6",
            name: "فستان صيفي",
            desc: " هذا الفستان الصيفس تبع المنتج رقم 6 الصورة مش كيوت غريبة مافيش تصنيف معروض",
            image: pro6,
            price: "ج.م 800",
            price_before: "ج.م 855",
            rating: 5,
            size: "XL",
            colors: ["green", "blue"],
            like: false
        },
        {
            id: "7",
            name: "بلوزة بيضاء قطنية",
            desc: " هذا اللبس تبع المنتج رقم 7 الصورة مش كيوت المفروض فيه رغي كتير هنا",
            image: pro7,
            price: "ج.م 345",
            price_before: "ج.م 400",
            rating: 4,
            size: "M",
            colors: ["blue", "yellow"],
            like: false
        },
        {
            id: "8",
            name: "فستان اسود",
            desc: "هذا الفستان تبع المنتج رقم 8 الصورة  يعني بس برده مش كيوت",
            image: pro8,
            price: "ج.م 800",
            price_before: "ج.م 900",
            rating: 4,
            size: "XL",
            colors: ["red", "green", "yellow"],
            like: false
        },
        {
            id: "9",
            name: "ملابس قطنية رجالي",
            desc: "هذا الشيرت رجالي تبع المنتج رقم 9 الصورة مش كيوت",
            image: pro9,
            price: "ج.م 185",
            price_before: "ج.م 200",
            rating: 3,
            size: "L",
            colors: ["red", "green", "blue"],
            like: false
        },
        {
            id: "10",
            name: "فستان اطفال بناتي",
            desc: "هذا الفستان للاطفال تبع المنتج رقم 10 الصورة مش كيوت",
            image: pro10,
            price: "ج.م 500",
            price_before: "ج.م 550",
            rating: 2,
            size: "S",
            colors: ["red", "purple", "blue"],
            like: false
        },
        {
            id: "11",
            name: "تيشيرت قطني",
            desc: "هذا الصورة غير موجوده تبع المنتج رقم 11 الصورة مش كيوت",
            image: pro11,
            price: "200 ج.م",
            price_before: "205 ج.م",
            rating: 5,
            size: "L",
            colors: ["red", "blue", "yellow"],
            like: false
        }
    ]
    let current = {}
    for (let i = 0; i < productsData.length; i++) {
        if (productsData[i].id == id) {
            current = productsData[i]
        }
    }

    //--------size part----------
    const sizesList = ["XS", "S", "M", "L", "XL"]

    //---------fav part-------
    const [like, setlike] = useState(current.like);
    const changeLike = () => {
        setlike(!like)
        current.like = like
    };







    ///////////////////////////////////////////////////////////////
    const dispatch = useDispatch()


    return (
        <section className="product-details">
            <div className="details">
                <h2>{current.name}</h2>
                <p>{current.price}&nbsp;&nbsp;-&nbsp;&nbsp;<span>{current.price_before}</span></p>
                <div className="pro-rate">
                    <p>(50)</p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <p>{current.desc}</p>
                <h3>: اللون</h3>
                <div className='colors-btns'>
                    {current.colors.map((colors, index) => (
                        <button className={colors} key={index}></button>
                    ))}
                </div>
                <h3>: الحجم</h3>
                <div className="sizes">
                    {sizesList.map((sizes, index) => {
                        if (current.size == sizes) {
                            return <span className='active-size' key={index}>{sizes}</span>
                        } else {
                            return <span key={index}>{sizes}</span>
                        }
                    })}
                </div>

                <button className="addCart-btn" onClick={() =>
                    dispatch(addToCart({
                        current
                    }))
                }>اضف للسلة</button>
                <input type="number" min="1" />

                <div className='fav'>
                    <p>اضف للمفضلة</p>
                    {like ?
                        <AiFillHeart onClick={() => {
                            changeLike()
                        }} />
                        :
                        <AiOutlineHeart onClick={() => {
                            changeLike()
                        }} />
                    }
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


            <div className="product-mainImg">
                <img src={current.image} alt="" />
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