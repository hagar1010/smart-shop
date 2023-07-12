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
import pro9 from '../../../assets/images/9.png'
import pro10 from '../../../assets/images/10.png'
import pro11 from '../../../assets/images/11.png'


import { BsList } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination} from 'swiper/modules';
import "swiper/css";
// import "swiper/css/bundle";



const ProductsContent = () => {


    //data & state-------
    const initialProductsData = [
        {
            id: "1",
            data: [
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
                },
                {
                    id: "9",
                    name: "ملابس قطنية رجالي",
                    image: pro9,
                    price: "185 ج.م",
                    price_before: "200 ج.م",
                    rating: 3,
                    size: "L"
                }
            ]
        },
        {
            id: "2",
            data: [
                {
                    id: "10",
                    name: "فستان اطفال بناتي",
                    image: pro10,
                    price: "500 ج.م",
                    price_before: "520 ج.م",
                    rating: 2,
                    size: "S"
                },
                {
                    id: "11",
                    name: "تيشيرت قطني",
                    image: pro11,
                    price: "200 ج.م",
                    price_before: "205 ج.م",
                    rating: 5,
                    size: "L"
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
    };
    const pervBtn = () => {
        swiper.slidePrev();//buttons
    };
    // const match = (index) => {
    //     swiper.realIndex = index
    //     setcurrent(swiper.realIndex)
    //     // setcurrentSlide(swiper.realIndex)
    //     console.log(swiper.realIndex)//
    //     // swiper.
    // }



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
                    // modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    onSlideChange={() => setcurrent(swiper.realIndex)}//dots
                    allowTouchMove={false}
                    // pagination={{
                    //     // clickable: true,
                    //     // type: "bullets",
                    //     // el:".swiper-pagination"
                    //     // el:".products-control-footer button"
                    //     //  el: '.swiper-pagination',
                    //     // type: 'custom',
                    //     // renderBullet: (index,className) => {
                    //     //     return '<span class="' + className + '">' + (index + 1) + '</span>';
                    //     // }
                    // }}
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
                                // match(index)
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