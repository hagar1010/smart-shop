import React, { useState } from 'react'
import './signupPage.css'

import signUp from '../../assets/images/signUp.png'
import linkedin from '../../assets/images/linkedin.png'
import pinterest from '../../assets/images/pinterest.png'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'

import { FiUser, FiLock } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";

import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'



const SignupPage = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate()

    const handelSubmit = () => {
        let userData = { name, email, password }
        axios
            .post("http://localhost:8000/users", userData)
            .then(res => {
                navigate("/Login")
            })
            .catch((err) => {
                console.log(err)
            })
    }




    return (
        <section className='auth'>
            <div className="signup-part">
                <h1>Smart Shop</h1>
                <h4>انشاء حساب</h4>
                <small>انشئ حساب مجاني واستمتع به</small>


                <form action=''>
                    <div className='inputs'>
                        <FiUser />
                        <input type='text' placeholder='الاسم' value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        <HiOutlineEnvelope />
                        <input type='email' placeholder="البريد الالكتروني" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        <FiLock />
                        <input type='password' placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </form>





                <div>
                    <p>هل نسيت كلمةالمرور؟</p>
                    <button onClick={handelSubmit}>انشاء حساب</button>
                </div>
                <h5>:او سجل الدخول عبر</h5>
                <img src={linkedin} alt="" />
                <img src={pinterest} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
            </div>







            <div className="auth-img">
                <img src={signUp} alt="" />
                <div className='auth-btns'>
                    <Link to="/Login">
                        <button className='log-btn'>تسجيل الدخول</button>
                    </Link>
                    <button className='sign-btn auth-active'>انشاء حساب</button>
                </div>
            </div>
        </section>
    )
}

export default SignupPage