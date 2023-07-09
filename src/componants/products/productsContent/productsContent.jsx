import React, { useState } from 'react'
import "./productsContent.css"

import SinglProduct from '../../shared/singleProduct/singleProduct';
import ProductsSidebar from '../productsSidebar/productsSidebar'

import pro1 from '../../../assets/images/1.png'
import pro2 from '../../../assets/images/2.png'
import pro3 from '../../../assets/images/3.png'
import pro4 from '../../../assets/images/4.png'
import pro5 from '../../../assets/images/5.png'
import pro6 from '../../../assets/images/6.png'
import pro7 from '../../../assets/images/7.png'
import pro8 from '../../../assets/images/8.png'

import { BsList } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";



const ProductsContent = () => {


    //data & state-------
    const initialProductsData = [
        {
            id: "1",
            data: [
                {
                    id: "8",
                    name: "فستان اسود",
                    image: pro8,
                    price: "800 ج.م",
                    price_before: "900 ج.م",
                    rating: 4,
                    size: "XL"
                },
                {

                    id: "1",
                    name: "فستان سهرات ازرق",
                    image: pro1,
                    price: "800 ج.م",
                    price_before: "900 ج.م",
                    rating: 4,
                    size: "XL"
                },
                {
                    id: "2",
                    name: "شيرت منزلي رجالي",
                    image: pro2,
                    price: "250 ج.م",
                    price_before: "300 ج.م",
                    rating: 3,
                    size: "XL"
                },
                {
                    id: "3",
                    name: "بلوزة اطفال بناتي",
                    image: pro3,
                    price: "500 ج.م",
                    price_before: "550 ج.م",
                    rating: 5,
                    size: "L"
                },
                {
                    id: "4",
                    name: "قميص رجالي",
                    image: pro4,
                    price: "850 ج.م",
                    price_before: "1000 ج.م",
                    rating: 2,
                    size: "XS"
                },
                {
                    id: "5",
                    name: "جاكيت اطفال",
                    image: pro5,
                    price: "800 ج.م",
                    price_before: "900 ج.م",
                    rating: 4,
                    size: "L"
                },
                {
                    id: "6",
                    name: "فستان صيفي",
                    image: pro6,
                    price: "700 ج.م",
                    price_before: "955 ج.م",
                    rating: 5,
                    size: "XL"
                },
                {
                    id: "7",
                    name: "بلوزة بيضاء قطنية",
                    image: pro7,
                    price: "345 ج.م",
                    price_before: "400 ج.م",
                    rating: 4,
                    size: "M"
                },
                {
                    id: "8",
                    name: "فستان اسود",
                    image: pro8,
                    price: "800 ج.م",
                    price_before: "900 ج.م",
                    rating: 4,
                    size: "XL"
                }
            ]
        },
        {
            id: "2",
            data: [
                {
                    id: "5",
                    name: "جاكيت اطفال",
                    image: pro5,
                    price: "800 ج.م",
                    price_before: "900 ج.م",
                    rating: 4,
                    size: "L"
                },
                {
                    id: "6",
                    name: "فستان صيفي",
                    image: pro6,
                    price: "700 ج.م",
                    price_before: "955 ج.م",
                    rating: 5,
                    size: "XL"
                },
                {
                    id: "7",
                    name: "بلوزة بيضاء قطنية",
                    image: pro7,
                    price: "345 ج.م",
                    price_before: "400 ج.م",
                    rating: 4,
                    size: "M"
                },
                {
                    id: "8",
                    name: "فستان اسود",
                    image: pro8,
                    price: "800 ج.م",
                    price_before: "900 ج.م",
                    rating: 4,
                    size: "XL"
                }
            ]
        },
        {
            id: "3",
            data: [
                {
                    id: "5",
                    name: "جاكيت اطفال",
                    image: pro5,
                    price: "800 ج.م",
                    price_before: "900 ج.م",
                    rating: 4,
                    size: "L"
                },
                {
                    id: "6",
                    name: "فستان صيفي",
                    image: pro6,
                    price: "700 ج.م",
                    price_before: "955 ج.م",
                    rating: 5,
                    size: "XL"
                },
                {
                    id: "7",
                    name: "بلوزة بيضاء قطنية",
                    image: pro7,
                    price: "345 ج.م",
                    price_before: "400 ج.م",
                    rating: 4,
                    size: "M"
                }
            ]
        }
    ]
    const [slideData, setSlideData] = useState(initialProductsData);



    //------------------------------swiper--------------------------
    //for next,perv buttons
    const [swiper, setSwiper] = useState(null);
    //for dots
    const [current, setcurrent] = useState(0);
    // const [currentSlide, setcurrentSlide] = useState(0);

    const nextBtn = () => {
        swiper.slideNext();//buttons
        setcurrent(swiper.realIndex)//dots
    };
    const pervBtn = () => {
        swiper.slidePrev();//buttons
        setcurrent(swiper.realIndex)//dots
    };
    const match = (index) => {
        swiper.realIndex = index
        setcurrent(swiper.realIndex)
        // setcurrentSlide(swiper.realIndex)
        console.log(swiper.realIndex)//
    }



    

    return (
        <section className='products-content'>
            <div>
                {/* content header---------------------------------------- */}
                <div className="products-control-header">
                    <div>
                        <select>
                            <option>الاقل سعرا</option>
                            <option>Order by price</option>
                            <option>Order by popularity</option>
                            <option>Order by rating</option>
                            <option>Order by sale</option>
                        </select>
                        <p>ترتيب حسب</p>
                    </div>
                    <div className='show-type-container'>
                        <BsList />
                        <span className='show-type'>
                            <div></div><div></div><div></div><div></div>
                        </span>
                        <p>عرض</p>
                    </div>
                </div>





                {/* main content------------------------------------------------ */}
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(s) => {
                        console.log(s)
                        setSwiper(s);
                    }}
                    allowTouchMove={false}
                >
                    {slideData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="main-products">
                                {
                                    slide.data.map((product, index) => (
                                        <SinglProduct key={index} product={product} />
                                    ))
                                }
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>





                {/* content footer---------------------------------------------------- */}
                <div className="products-control-footer">
                    <AiOutlineArrowLeft onClick={pervBtn} />
                    {slideData.map((slide, index) => {
                        if (current == index) {
                            return <button className='chossed' key={index}>{index + 1}</button>
                        } else {
                            return <button key={index} onClick={() => {
                                match(index)
                            }}>{index + 1}</button>
                        }
                    })}
                    <AiOutlineArrowRight onClick={nextBtn} />
                </div>
            </div>


            <ProductsSidebar />
        </section>
    )
}

export default ProductsContent