import React from 'react'

import brand7 from '../../../assets/images/brandlogo7.png'
import brand6 from '../../../assets/images/brandlogo6.png'
import brand5 from '../../../assets/images/brandlogo5.png'
import brand4 from '../../../assets/images/brandlogo4.png'
import brand3 from '../../../assets/images/brandlogo3.png'
import brand2 from '../../../assets/images/brandlogo2.png'
import brand1 from '../../../assets/images/brandlogo1.png'
import "./brands.css"

const Brands = () => {
    return (
        <section className='brands'>
            <h3>البرندات</h3>
            <div>
                <img src={brand3} alt="" />
                <img src={brand1} alt="" />
                <img src={brand4} alt="" />
                <img src={brand6} alt="" />
                <img src={brand2} alt="" />
                <img src={brand5} alt="" />
                <img src={brand7} alt="" />

            </div>
        </section>
    )
}

export default Brands