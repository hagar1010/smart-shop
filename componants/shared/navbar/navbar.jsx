import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsList, BsX } from "react-icons/bs";

import logo from '../../../assets/images/Vector.png'
import { NavLink, Link } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {

    //menu toggle------------
    const [navDisplay, setnavDisplay] = useState(false);
    const toggleMenu = () => {
        setnavDisplay(!navDisplay)
    }


    return (
        <section className='bar'>
            <div className='tools'>
                <NavLink to="/Cart"><AiOutlineShoppingCart /></NavLink>
                <AiOutlineHeart />
                <AiOutlineUser />
                <AiOutlineSearch />
            </div>
                <nav className={`${navDisplay ? " nav-display" : ""}`}>
                    <BsX onClick={toggleMenu} />
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
            <BsList onClick={toggleMenu} className='list-icon' />
        </section>
    )
}
export default Navbar;
