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



// import { addToCart } from '../../../store/cartSlice';
// import { useDispatch } from 'react-redux';
import axios from 'axios';



const ProductDetails = () => {
    const { id } = useParams();
    const productsData = [
        {
            id: "1",
            name: "فستان سهرات ازرق",
            desc: "هذا افستان تبع المنتج رقم 9 الصورة مش كيوت  واخيرااا هييي",
            image: pro1,
            price: 410,
            price_before: 440,
            rating: 3,
            size: "XL",
            colors: ["red", "blue"],
            like: false,
            count: 1
        },
        {
            id: "2",
            name: "شيرت منزلي رجالي",
            desc: "هذا الشيرت رجالي تبع المنتج رقم 2 الصورة مش كيوت للمرة التانيه طفشت",
            image: pro2,
            price: 250,
            price_before: 300,
            rating: 3,
            size: "XL",
            colors: ["red", "green", "blue"],
            like: false,
            count: 1
        },
        {
            id: "3",
            name: "بلوزة اطفال بناتي",
            desc: "هذا اللبس تبع المنتج رقم 3 الصورة مش كيوت بلابلابلابل بلا ليلو",
            image: pro3,
            price: 500,
            price_before: 550,
            rating: 5,
            size: "L",
            colors: ["yellow", "blue"],
            like: false,
            count: 1
        },
        {
            id: "4",
            name: "قميص رجالي",
            desc: "هذا القميص رجالي تبع المنتج رقم 4 الصورة مش كيوت عشان كده لازم داتا جاهزة ده حوار",
            image: pro4,
            price: 850,
            price_before: 900,
            rating: 2,
            size: "XS",
            colors: ["green", "purple"],
            like: false,
            count: 1
        },
        {
            id: "5",
            name: "جاكيت اطفال",
            desc: "هذا الجاكيت تبع المنتج رقم 9 الصورة مش كيوت طفشت من الهبد مجهود",
            image: pro5,
            price: 700,
            price_before: 750,
            rating: 4,
            size: "L",
            colors: ["red", "purple", "blue"],
            like: false,
            count: 1
        },
        {
            id: "6",
            name: "فستان صيفي",
            desc: " هذا الفستان الصيفس تبع المنتج رقم 6 الصورة مش كيوت غريبة مافيش تصنيف معروض",
            image: pro6,
            price: 800,
            price_before: 855,
            rating: 5,
            size: "XL",
            colors: ["green", "blue"],
            like: false,
            count: 1
        },
        {
            id: "7",
            name: "بلوزة بيضاء قطنية",
            desc: " هذا اللبس تبع المنتج رقم 7 الصورة مش كيوت المفروض فيه رغي كتير هنا",
            image: pro7,
            price: 345,
            price_before: 400,
            rating: 4,
            size: "M",
            colors: ["blue", "yellow"],
            like: false,
            count: 1
        },
        {
            id: "8",
            name: "فستان اسود",
            desc: "هذا الفستان تبع المنتج رقم 8 الصورة  يعني بس برده مش كيوت",
            image: pro8,
            price: 800,
            price_before: 900,
            rating: 4,
            size: "XL",
            colors: ["red", "green", "yellow"],
            like: false,
            count: 1
        },
        {
            id: "9",
            name: "ملابس قطنية رجالي",
            desc: "هذا الشيرت رجالي تبع المنتج رقم 9 الصورة مش كيوت",
            image: pro9,
            price: 185,
            price_before: 200,
            rating: 3,
            size: "L",
            colors: ["red", "green", "blue"],
            like: false,
            count: 1
        },
        {
            id: "10",
            name: "فستان اطفال بناتي",
            desc: "هذا الفستان للاطفال تبع المنتج رقم 10 الصورة مش كيوت",
            image: pro10,
            price: 500,
            price_before: 550,
            rating: 2,
            size: "S",
            colors: ["red", "purple", "blue"],
            like: false,
            count: 1
        },
        {
            id: "11",
            name: "تيشيرت قطني",
            desc: "هذا الصورة غير موجوده تبع المنتج رقم 11 الصورة مش كيوت",
            image: pro11,
            price: 200,
            price_before: 205,
            rating: 5,
            size: "L",
            colors: ["red", "blue", "yellow"],
            like: false,
            count: 1
        }
    ]


    const [detailData, setDetailData] = useState(productsData)


    let current = {}
    for (let i = 0; i < detailData.length; i++) {
        if (detailData[i].id == id) {
            current = detailData[i]
        }
    }
    document.title = `Smart Shop | Products ${id}`


    //--------size part----------
    const sizesList = ["XS", "S", "M", "L", "XL"]


    //---------changes part-------
    const [count, setCount] = useState(1)
    const [added, setAdded] = useState(false);

    const fav = (current) => {
        const details = [...detailData]
        let index = details.indexOf(current)
        details[index].like = !details[index].like
        setDetailData(details)
    }

    ///////////////////////////////////////////////////////////////
    // const dispatch = useDispatch()
    const addCart = (current) => {
        axios
            .post("http://localhost:8000/cart", current)
            .then(res => {

            })
            .catch((err) => {
                console.log(err)
            })
    }






    return (
        <section className="product-details">
            <div className="details">
                <h2>{current.name}</h2>
                <p>
                    ج.م {current.price}
                    &nbsp;&nbsp;-&nbsp;&nbsp;
                    <span>{current.price_before} ج.م</span>
                </p>
                <div className="pro-rate">
                    <p>(50)</p>
                    {
                        detailData.filter((item, length) => length < 5 - current.rating).map((item,index) => {
                            return <AiOutlineStar key={index}/>
                        })
                    }
                    {
                        detailData.filter((item, length) => length < current.rating).map((item,index) => {
                            return <AiFillStar key={index}/>
                        })
                    }
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

                <button className="addCart-btn" onClick={() => {
                    // dispatch(addToCart(current))
                    // console.log(addToCart.current=current)
                    addCart(current)
                    setAdded(true)
                }}>اضف للسلة</button>
                <input
                    type="number"
                    min="1"
                    value={count}
                    onChange={e => setCount(e.target.value)} />

                <small className={`added ${added ? "display-added" : ""}`}>تم الاضافة للسلة بنجاح</small>


                <div className='fav'>
                    <p>اضف للمفضلة</p>
                    {
                        current.like ?
                            <AiFillHeart onClick={() => {
                                fav(current)
                            }} />
                            :
                            <AiOutlineHeart onClick={() => {
                                fav(current)
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