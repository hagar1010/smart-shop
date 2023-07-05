import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import logo from '../../../assets/images/Vector.png'
import './navbar.css'

const Navbar = () => {
    return (
        <section className='bar'>
            <div className='tools'>
                <AiOutlineShoppingCart />
                <AiOutlineHeart/>
                <AiOutlineUser/>
                <AiOutlineSearch/>
            </div>
            <nav>
                <ul>
                    <li><a href="">اتصل بنا</a></li>
                    <li><a href="">المدونه</a></li>
                    <li><a href="">الشروط ولاحكام</a></li>
                    <li><a href="">نبذة عنا</a></li>
                    <li><a href="">الخدمات</a></li>
                    <li><a href="">المنتجات</a></li>
                    <li><a href="" className='active'>الرئيسية</a></li>
                </ul>
                <img src={logo} width='70px' />
            </nav>
        </section>
    )
}
export default Navbar;
