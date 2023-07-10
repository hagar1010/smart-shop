import React from 'react'
import pic1 from "../../../assets/images/pic1.png"
import pic2 from "../../../assets/images/pic2.png"
import pic3 from "../../../assets/images/pic3.png"
import "./gallary.css"

const Gallary = () => {
    return (
        <section className='gallary'>
            <div>
                <img src={pic1} alt="" />
                <h5>مع اجمل صيحات الموضة</h5>
                <small>اطلالة فريدة مع افضل تشكيلة ملابس شبابي</small>
            </div>
            <div>
                <h5>اشتري اللي يخليك شيك</h5>
                <small>مع اجمل ملابس الشباب الحديثة</small>
                <img src={pic2} alt="" />
            </div>
            <div>
                <img src={pic3} alt="" />
                <h5>استمتعي بأجواء مبهرة في الخروجات</h5>
                <small>مع باقة من اجمل الملابس الكاجوال البناتي المودرن</small>
            </div>
        </section>
    )
}

export default Gallary