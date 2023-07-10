import React from 'react'
import disImg1 from '../../../assets/images/discount-1.png'
import disImg2 from '../../../assets/images/discount-2.png'
import './discount.css'
import { Link } from 'react-router-dom'


const Discount = () => {
    return (
        <section className='discount'>
            <div className='offer'>
                <div className='info'>
                    <p>خصم كبير</p>
                    <h2>فساتين بناتي</h2>
                    <Link to="/Products">تسوق الآن</Link>
                </div>
                <img src={disImg1} alt="" />
            </div>
            <div className='offer other-color'>
                <div className='info'>
                    <h2>ملابس الأطفال</h2>
                    <p>خصم 50%</p>
                    <Link to="/Products">تسوق الآن</Link>
                </div>
                <img src={disImg2} alt="" />
            </div>
        </section>
    )
}

export default Discount