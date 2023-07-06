import React from 'react';
import ellipse1 from '../../../assets/images/Ellipse 1.png'
import ellipse2 from '../../../assets/images/Ellipse 2.png'
import ellipse3 from '../../../assets/images/Ellipse 3.png'



import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import './headerAdvSlider.css'

const HeaderAdvSlider = () => {
    // const headerAdv = [
    //     {
    //         id: "1",
    //         image: ellipse1,
    //         title: "أحدث ادوات الجمال",
    //         subtitle: "برندات نسائي عالمي"
    //     },
    //     {
    //         id: "2",
    //         image: ellipse1,
    //         title: "موديلات شباب",
    //         subtitle: "افضل عروض للشباب اليوم"
    //     },
    //     {
    //         id: "3",
    //         image: ellipse1,
    //         title: "اوبست فرانكو",
    //         subtitle: "زا ارابيك از نوت كيوت"
    //     },
    //     {
    //         id: "4",
    //         image: ellipse1,
    //         title: "لالالالالاه",
    //         subtitle: "واهاهاهاهاهاههاهاهاههاهوااخااااها"
    //     },
    // ]
    // let update = () => {
    //     const item = review_data[current_review]
    //     review.textContent = item.review
    //     user_name.textContent = item.user_name
    //     user_img.src = item.image
    // }
    // update()
    // const nextBtn = () => {
    //     current_review++
    //     if (current_review > review_data.length - 1) {
    //         current_review = 0
    //     }
    //     update()
    // };
    // const pervBtn = () =>{
    //     current_review--
    //     if (current_review < 0) {
    //         current_review = review_data.length - 1
    //     }
    //     update()
    // }
    return (
        <section className='headerAdvSlider'>
            <div className="row">
                <div className="adv-img">
                    <img src={ellipse1} alt="" />
                    <img src={ellipse2} alt="" />
                    <img src={ellipse3} alt="" />
                </div>
                <div className="text-box">
                    <p>برندات نسائي عالمي</p>
                    <h2>أحدث ادوات الجمال</h2>
                    <p>برندات نسائي عالمي</p>
                    <a href="" className='hero-btn'>اكتشف الآن</a>
                </div>
            </div>
            <div className="slider-control">
                <button><FaAngleLeft /></button>
                <button><FaAngleRight /></button>
            </div>
        </section>
    )
}
export default HeaderAdvSlider;
