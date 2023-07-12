import React from 'react'
import "./header.css"
import headerImg from "../../../assets/images/header.png"

const Header = () => {
    return (
        <section className='header'>
            <div className="header-text">
                <h1>تسوق احدث المنتجات العصرية</h1>
                <p>الرئيسية &nbsp;&nbsp;<span>/</span>&nbsp;&nbsp; المنتجات</p>
            </div>
            <img src={headerImg} alt="" />
        </section>
    )
}

export default Header