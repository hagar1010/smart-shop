import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import logo from '../../../assets/images/Vector.png'
import { NavLink,Link } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {
    return (
        <section className='bar'>
            <div className='tools'>
                <NavLink to="/Cart"><AiOutlineShoppingCart /></NavLink>
                <AiOutlineHeart/>
                <AiOutlineUser/>
                <AiOutlineSearch/>
            </div>
            <nav>
                <ul>
                    <li><Link to="">اتصل بنا</Link></li>
                    <li><Link to="">المدونه</Link></li>
                    <li><Link to="">الشروط ولاحكام</Link></li>
                    <li><Link to="">نبذة عنا</Link></li>
                    <li><Link to="">الخدمات</Link></li>
                    <li><NavLink to="/Products">المنتجات</NavLink></li>
                    <li><NavLink to="/">الرئيسية</NavLink></li>
                </ul>
                <img src={logo} width='70px' />
            </nav>
        </section>
    )
}
export default Navbar;
