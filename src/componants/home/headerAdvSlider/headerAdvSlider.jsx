import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import ellipse2 from '../../../assets/images/Ellipse 2.png'
import ellipse3 from '../../../assets/images/Ellipse 3.png'

import headerAdv1 from '../../../assets/images/headerAdv1.png'
import headerAdv2 from '../../../assets/images/headerAdv2.png'
import headerAdv3 from '../../../assets/images/headerAdv3.png'


import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './headerAdvSlider.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";






const HeaderAdvSlider = () => {
    const initialheaderAdv = [
        {
            image: headerAdv1,
            title: "أحدث ادوات الجمال",
            subtitle: "برندات نسائي عالمي"
        },
        {
            image: headerAdv3,
            title: "موديلات شباب",
            subtitle: "افضل عروض للشباب اليوم"
        },
        {
            image: headerAdv2,
            title: "اوبست فرانكو",
            subtitle: "زا ارابيك از نوت كيوت"
        },
    ]
    const [headerAdv, setState] = useState(initialheaderAdv);



    //------------------------------swiper--------------------------
    //for next,perv buttons
    const [swiper, setSwiper] = useState(null);
    //for dots
    const [current, setcurrent] = useState(0);

    const nextBtn = () => {
        swiper.slideNext();//buttons
        setcurrent(swiper.realIndex)//dots
    };
    const pervBtn = () => {
        swiper.slidePrev();//buttons
        setcurrent(swiper.realIndex)//dots
    };





    return (
        <section className='headerAdvSlider'>
            <Swiper
                loop="true"
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(s) => {
                    setSwiper(s);
                }}
                allowTouchMove={false}   //could remove
            >
                {
                    headerAdv.map((adv, index) => (

                        <SwiperSlide key={index}>
                            <div className="row">
                                <div className="adv-img">
                                    <img className='main-img' src={adv.image} alt="" />
                                    <img src={ellipse2} alt="" />
                                    <img src={ellipse3} alt="" />
                                </div>
                                <div className="text-box">
                                    <p>{adv.subtitle}</p>
                                    <h2>{adv.title}</h2>
                                    <p>{adv.subtitle}</p>
                                    <Link to="/Products" className='hero-btn'>اكتشف الآن</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="slider-control">
                <button onClick={pervBtn}><FaAngleLeft /></button>
                <div className='dots'>
                    {
                        headerAdv.map((dot, index) => {              //important
                            if (current == index) {
                                return <div className='chossed' key={index}></div>
                            } else {
                                return <div key={index}></div>
                            }
                        })
                    }
                </div>
                <button onClick={nextBtn} className='right'><FaAngleRight /></button>
            </div>
        </section >
    )
}
export default HeaderAdvSlider;
