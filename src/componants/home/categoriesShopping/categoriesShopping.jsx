import React, { useState } from 'react'

import SingleProduct from '../../shared/singleProduct/singleProduct'
import pro6 from '../../../assets/images/6.png'
import pro7 from '../../../assets/images/7.png'
import pro8 from '../../../assets/images/8.png'
import pro1 from '../../../assets/images/1.png'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./categoriesShopping.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";




const CategoriesShopping = () => {

    const initialCategoryProducts = [
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
            id: "1",
            name: "فستان سهرات ازرق",
            image: pro1,
            price: "800 ج.م",
            price_before: "900 ج.م",
            rating: 4,
            size: "XL"
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
            id: "8",
            name: "فستان اسود",
            image: pro8,
            price: "800 ج.م",
            price_before: "900 ج.م",
            rating: 4,
            size: "XL"
        }
    ]
    const [categoryProducts, setState] = useState(initialCategoryProducts);



    const [swiper, setSwiper] = React.useState(null);
    const nexto = () => {
        swiper.slideNext();
    };
    const pervto = () => {
        swiper.slidePrev();
    };



    return (
        <section className='categories-container'>
            <div className='swiper'>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={3}
                    loop="true"/**/
                    onSwiper={(s) => {
                        console.log("initialize swiper", s);
                        setSwiper(s);
                    }}
                >
                    {
                        categoryProducts.map((product, index) => (
                            <SwiperSlide>
                                <SingleProduct key={index} product={product} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <button className='arrow' onClick={pervto}><AiOutlineArrowLeft /></button>
                <button className='arrow right' onClick={nexto}><AiOutlineArrowRight /></button>
            </div>

            <div className="categories-list">
                <h6>تسوق عبر الفئات</h6>
                <button>رجالي</button>
                <button>حريمي</button>
                <button>اطفال</button>
                <button>اكسسوارات</button>
                <button>العاب</button>
            </div>

        </section>
    )
}

export default CategoriesShopping


{/* <div className="category-slider">
                 {
                    categoryProducts.map((product, index) => (
                        <SingleProduct key={index} product={product} />
                    ))
                }
                <button className='arrow-l'><AiOutlineArrowLeft /></button>
                <button className='arrow-r'><AiOutlineArrowRight /></button>
</div> */}