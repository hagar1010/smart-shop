import React from 'react'
import limited1 from '../../../assets/images/limited1.png'
import limited2 from '../../../assets/images/limited2.png'
import './limitedOffer.css'
import { Link } from 'react-router-dom'

const LimitedOffer = () => {
    return (
        <section className="limited-offer">
            <div className='limited-boy'>
                <img src={limited1} alt="" />
            </div>
            <div className="offer-time">
                <p>اكبر خصم على الاطلاق</p>
                <h1>احدث ملابس الاطفال</h1>
                <table>
                    <thead>
                        <tr>
                            <th className='sec'>00</th>
                            <th>00</th>
                            <th>00</th>
                            <th>00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='sec'>ثانية</td>
                            <td>دقيقة</td>
                            <td>ساعة</td>
                            <td>يوم</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/Products"><button>تسوق الآن</button></Link>
            </div>
            <div className='limited-girl'>
                <img src={limited2} alt="" />
            </div>
        </section>
    )
}

export default LimitedOffer