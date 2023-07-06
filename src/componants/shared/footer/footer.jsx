import React from 'react';
import { Link } from 'react-router-dom';
import whats from "../../../assets/images/WhatsApp.png";
import youtube from "../../../assets/images/Youtube.png";
import facebook from "../../../assets/images/Facebook.png";
import twitter from "../../../assets/images/Twitter.png";
import "./footer.css";


const Footer = () => {
    return (
        <section className='footer'>
            <ul>
                <li><Link to="">اتصل بنا</Link></li>
                <li><Link to="">المدونه</Link></li>
                <li><Link to="">الشروط ولاحكام</Link></li>
                <li><Link to="">نبذة عنا</Link></li>
                <li><Link to="">الخدمات</Link></li>
                <li><Link to="/Products">المنتجات</Link></li>
                <li><Link to="/">الرئيسية</Link></li>
            </ul>
            <div>
                <img src={whats} alt="" />
                <img src={youtube} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
            </div>
            <h4>ابقى على تواصل معنا</h4>
            <p>جميع حقوق النشر محفوظة لشركة سمارت كود</p>
        </section>
    )
}
export default Footer;
