import React, { useState } from 'react'
import "./similarProducts.css"

import pro4 from '../../../assets/images/4.png'
import pro6 from '../../../assets/images/6.png'
import pro7 from '../../../assets/images/7.png'
import pro9 from '../../../assets/images/9.png'
import pro10 from '../../../assets/images/10.png'

import SingleProduct from '../../shared/singleProduct/singleProduct'

const SimilarProducts = () => {
    const initialProductsData = [
        {
            id: "4",
            name: "قميص رجالي",
            image: pro4,
            price: "850 ج.م",
            price_before: "1000 ج.م",
            rating: 2,
            size: "XS"
        },
        {
            id: "6",
            name: "فستان صيفي",
            image: pro6,
            price: "700 ج.م",
            price_before: "955 ج.م",
            rating: 5,
            size: "XL"
        },
        {
            id: "9",
            name: "ملابس قطنية رجالي",
            image: pro9,
            price: "185 ج.م",
            price_before: "200 ج.م",
            rating: 3,
            size: "L"
        },
        {
            id: "10",
            name: "فستان اطفال بناتي",
            image: pro10,
            price: "500 ج.م",
            price_before: "520 ج.م",
            rating: 2,
            size: "S"
        },
        {
            id: "7",
            name: "بلوزة بيضاء قطنية",
            image: pro7,
            price: "345 ج.م",
            price_before: "400 ج.م",
            rating: 4,
            size: "M"
        }
    ]
    const [products, setState] = useState(initialProductsData);


    return (
        <section className='similar-products'>
            <h3>منتجات مشابهة</h3>
            <div className='similar-container'>
                {
                    products.map((product, index) => (
                        <SingleProduct key={index} product={product} />
                    ))}
            </div>
        </section>
    )
}

export default SimilarProducts