import React from 'react';
import ellipse1 from '../../../assets/images/Ellipse 1.png'
import ellipse2 from '../../../assets/images/Ellipse 2.png'
import ellipse3 from '../../../assets/images/Ellipse 3.png'
import './headerAdvSlider.css'

const HeaderAdvSlider = () => {
    return (
        <section className='row'>
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
        </section>
    )
}
export default HeaderAdvSlider;
