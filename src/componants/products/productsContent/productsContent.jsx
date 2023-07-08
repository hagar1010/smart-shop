import React, { useState } from 'react'
import "./productsContent.css"

import SinglProduct from '../../shared/singleProduct/singleProduct';
import ProductsSidebar from '../productsSidebar/productsSidebar'

import pro1 from '../../../assets/images/1.png'
import pro2 from '../../../assets/images/2.png'
import pro3 from '../../../assets/images/3.png'
import pro4 from '../../../assets/images/4.png'
import pro5 from '../../../assets/images/5.png'
import pro6 from '../../../assets/images/6.png'
import pro7 from '../../../assets/images/7.png'
import pro8 from '../../../assets/images/8.png'

import { BsList } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";




const ProductsContent = () => {
    const initialProductsData = [
        {
            id: "8",
            name: "فستان اسود",
            image: pro8,
            price: "800 ج.م",
            price_before: "900 ج.م",
            rating: 4,
            size: "XL"
        },
        {

            id: "1",
            name: "فستان سهرات ازرق",
            image: pro1,
            price: "800 ج.م",
            price_before: "900 ج.م",
            rating: 4,
            size: "XL"
        },
        {
            id: "2",
            name: "شيرت منزلي رجالي",
            image: pro2,
            price: "250 ج.م",
            price_before: "300 ج.م",
            rating: 3,
            size: "XL"
        },
        {
            id: "3",
            name: "بلوزة اطفال بناتي",
            image: pro3,
            price: "500 ج.م",
            price_before: "550 ج.م",
            rating: 5,
            size: "L"
        },
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
            id: "5",
            name: "جاكيت اطفال",
            image: pro5,
            price: "800 ج.م",
            price_before: "900 ج.م",
            rating: 4,
            size: "L"
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
            id: "7",
            name: "بلوزة بيضاء قطنية",
            image: pro7,
            price: "345 ج.م",
            price_before: "400 ج.م",
            rating: 4,
            size: "M"
        },
        {
            id: "8",
            name: "فستان اسود",
            image: pro8,
            price: "800 ج.م",
            price_before: "900 ج.م",
            rating: 4,
            size: "XL"
        }
    ]
    const [products, setState] = useState(initialProductsData);
    return (
        <section className='products-content'>
            <div>
                <div className="products-control-header">
                    <div>
                        <select>
                            <option>الاقل سعرا</option>
                            <option>Order by price</option>
                            <option>Order by popularity</option>
                            <option>Order by rating</option>
                            <option>Order by sale</option>
                        </select>
                        <p>ترتيب حسب</p>
                    </div>
                    <div className='show-type-container'>
                        <BsList />
                        <span className='show-type'>
                            <div></div><div></div><div></div><div></div>
                        </span>
                        <p>عرض</p>
                    </div>
                </div>
                <div className="main-products">
                    {
                        products.map((product, index) => (
                            <SinglProduct key={index} product={product} />
                        ))
                    }
                </div>
                <div className="products-control-footer">
                    <AiOutlineArrowLeft/>
                    <button className='chossed'>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <AiOutlineArrowRight/>
                </div>
            </div>
            <ProductsSidebar />
        </section>
    )
}

export default ProductsContent