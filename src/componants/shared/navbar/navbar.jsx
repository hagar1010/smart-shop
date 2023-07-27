import React, { useState } from 'react';
import { AiOutlineSetting, AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsList, BsX } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import user1 from "../../../assets/images/user-1.png"







import logo from '../../../assets/images/Vector.png'
import { NavLink, Link } from 'react-router-dom';

import './navbar.css'

const Navbar = (props) => {

    //menu toggle------------
    const [navDisplay, setnavDisplay] = useState(false);
    const toggleMenu = () => {
        setnavDisplay(!navDisplay)
    }


    const [openMenu, setUserMenu] = useState(false);
    const userMenu = () => {
        setUserMenu(!openMenu)
    }


    const [openSearch, setSearch] = useState(false);
    const search = () => {
        setSearch(!openSearch)
    }




    //local storage
    const logged = localStorage.getItem("logged")
    const logout = () => {
        // const islogg = !localStorage.getItem("logged")
        // localStorage.setItem("logged", islogg)
        localStorage.removeItem("logged")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
    }

    const username=localStorage.getItem("name")
    const useremail=localStorage.getItem("email")


    let data = require('../../../db.json');


    return (
        <section className='bar'>
            <div className="navbar">
                <div className='tools'>
                    <NavLink to="/Cart">
                        {
                            data.cart.length!=0?
                            <div className='cart-length'>{data.cart.length}</div>   
                            :
                            null
                        }       
                        <AiOutlineShoppingCart />
                    </NavLink>
                    <AiOutlineHeart />
                    <AiOutlineUser onClick={userMenu} />
                    <AiOutlineSearch onClick={search} />
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
            </div>



            <div className={`search ${openSearch ? " open-search" : ""}`}>
                <BsX onClick={search} />
                <p>عن ماذا تبحث؟</p>
                <div className='search-input'>
                    <AiOutlineSearch />
                    <input type='text' placeholder='...اكتب كلمة البحث' />
                </div>
            </div>



            {
                logged ?
                    <div className={`visitor-menu ${openMenu ? " open-menu" : ""}`} >
                        <Link to="/Profile">
                        <div className='user-info'>
                            <div>
                                <h5>{username} مرحبا </h5>
                                <p>{useremail}</p>
                            </div>
                            <button>
                                <img src={user1} width={70}/>
                                {/* <AiOutlineUser /> */}
                            </button>
                        </div>
                        </Link>
                        <button className="visitor">
                            <p>الاعدادات</p>
                            <AiOutlineSetting />
                        </button>
                        <button className="visitor">
                            <p>تفاصيل الحساب</p>
                            <BiUserCircle />
                        </button>

                        <Link to="/Login">
                            <button className="visitor" onClick={logout}>
                                <p>تسجيل الخروج</p>
                                <HiOutlineLogout />
                            </button>
                        </Link>

                    </div>
                    :
                    <div className={`visitor-menu ${openMenu ? " open-menu" : ""}`} >
                        <Link to="/Login">
                            <button className="visitor">
                                <p>تسجيل الدخول</p>
                                <BiUserCircle />
                            </button>
                        </Link>
                        <Link to="/Signup">
                            <button className="visitor">
                                <p>تسجيل جديد</p>
                                <BiUserCircle />
                            </button>
                        </Link>
                    </div>

            }
        </section>
    )
}
export default Navbar;
