import React, { useState } from 'react'

import logIn from '../../assets/images/logIn.png'
import linkedin from '../../assets/images/linkedin.png'
import pinterest from '../../assets/images/pinterest.png'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'

import { FiLock } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaEye, FaEyeSlash } from 'react-icons/fa'


import { Link, useNavigate } from "react-router-dom"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'





const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    ///////
    let data = require('../../db.json');



    const [displayNotValid, setNotValid] = useState(false);
    const notValid = () => {
        setNotValid(true)
        // toast.error("حدث خطا ما الرجاء المحاولة مرة اخرى",{
        //     className: 'toast-message'
        // })
    }




    /////
    const navigate = useNavigate()

    //////
    const handelSubmit = () => {
        let userData = { email, password }
        for (let i = 0; i < data.users.length; i++) {

            if (userData.email == data.users[i].email && userData.password == data.users[i].password) {
                localStorage.setItem("logged", true)
                localStorage.setItem("name", data.users[i].name)
                localStorage.setItem("email", data.users[i].email)
                toast.success(data.users[i].name + " مرحبا بك ",{
                    className: 'toast-message'
                })
                navigate("/")
                break;
            } else {
                notValid()
                // break;
            }
        }

    }


    const [passEye, setPassEye] = useState(false)




    return (
        <section className='auth'>


            <div className="signup-part">
                <h1>Smart Shop</h1>
                <h4>تسجيل الدخول</h4>
                <small>تسجيل الدخول للمتابعه في حسابنا</small>


                <form>
                    <div className='inputs'>
                        <HiOutlineEnvelope />
                        <input type='email' placeholder="البريد الالكتروني" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        <FiLock />
                        {
                            password == "" ? null :
                                passEye ?
                                    <FaEye className='pass-eye' onClick={() => {
                                        setPassEye(!passEye)
                                    }} />
                                    :
                                    <FaEyeSlash className='pass-eye' onClick={() => {
                                        setPassEye(!passEye)
                                    }} />
                        }
                        <input
                            type={passEye ? "text" : "password"}
                            placeholder="كلمة المرور"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <p className={`not-valid ${displayNotValid ? "display-not-valid" : ""}`}>البريد الاكتروني او كلمة المرور غير صحيحين يرجى التاكد مجددا</p>
                </form>


                <div>
                    <p>هل نسيت كلمةالمرور؟</p>
                    <button onClick={handelSubmit}>تسجيل الدخول</button>
                </div>
                <h5>:او سجل الدخول عبر</h5>
                <img src={linkedin} alt="" />
                <img src={pinterest} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
            </div>





            <div className="auth-img">
                <img src={logIn} alt="" />
                <div className='auth-btns'>
                    <button className='log-btn auth-active'>تسجيل الدخول</button>
                    <Link to="/Signup">
                        <button className='sign-btn'>انشاء حساب</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LoginPage