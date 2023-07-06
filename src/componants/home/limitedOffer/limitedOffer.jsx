import React from 'react'
import limited1 from '../../../assets/images/limited1.png'
import limited2 from '../../../assets/images/limited2.png'
import './limitedOffer.css'

const LimitedOffer = () => {
    return (
        <section className="limited-offer">
            <div className='limited-boy'>
            <img src={limited1} alt=""/>
            </div>
            <div className="offer-time">
                <p>اكبر خصم على الاطلاق</p>
                <h1>احدث ملابس الاطفال</h1>
                <table>
                    <tr>
                        <th className='sec'>00</th>
                        <th>00</th>
                        <th>00</th>
                        <th>00</th>
                    </tr>
                    <tr>
                        <td className='sec'>ثانية</td>
                        <td>دقيقة</td>
                        <td>ساعة</td>
                        <td>يوم</td>
                    </tr>
                </table>
                <button>تسوق الآن</button>
            </div>
            <div className='limited-girl'>
            <img src={limited2} alt="" />
            </div>
        </section>
    )
}

export default LimitedOffer