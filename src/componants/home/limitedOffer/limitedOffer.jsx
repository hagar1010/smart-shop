import React, { useState, useEffect } from 'react'
import limited1 from '../../../assets/images/limited1.png'
import limited2 from '../../../assets/images/limited2.png'
import './limitedOffer.css'
import { Link } from 'react-router-dom'

const LimitedOffer = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "July, 30, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);




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
                            <th className='sec'>{seconds}</th>
                            <th>{minutes}</th>
                            <th>{hours}</th>
                            <th>{days}</th>
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