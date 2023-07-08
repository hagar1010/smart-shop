import React from 'react'
import { BsGift, BsTruck, BsPhone, BsWallet2 } from "react-icons/bs";
import './features.css'

const Features = () => {
    return (
        <section className='features'>
            <div className='feature'>
                <div>
                    <h5>عروض حصرية</h5>
                    <p>خصومات كبيرة على منتجاتنا</p>
                </div>
                <BsGift/>
            </div>
            <div className='feature'>
                <div>
                    <h5>استرجاع الأموال</h5>
                    <p>استرداد آمن لأموالك او الاستبدال</p>
                </div>
                <BsWallet2/>
            </div>
            <div className='feature'>
                <div>
                    <h5>دعم فني</h5>
                    <p>دعم على مدار الساعة</p>
                </div>
                <BsPhone/>
            </div>
            <div className='feature'>
                <div>
                    <h5>توصيل مجاني</h5>
                    <p>للطلبات اعلى من 200 جنيه</p>
                </div>
                <BsTruck/>
            </div>     
        </section>
    )
}

export default Features;