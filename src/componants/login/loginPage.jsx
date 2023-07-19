import React, { useState } from 'react'

import logIn from '../../assets/images/logIn.png'
import linkedin from '../../assets/images/linkedin.png'
import pinterest from '../../assets/images/pinterest.png'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'

import { FiLock } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";

import { Link, useNavigate } from "react-router-dom"





const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    ///////
    let data = require('../../db.json');
    // localStorage.setItem("logged",false)


    // const [logged, setLogged] = useState(false);
    // const beLogged = () => {
    //     setLogged(true)
    //     console.log(logged)///////
    // }



    const [displayNotValid, setNotValid] = useState(false);
    const notValid = () => {
        setNotValid(true)
    }




    /////
    const navigate = useNavigate()

    //////
    const handelSubmit = () => {
        let userData = { email, password }
        for (let i = 0; i < data.users.length; i++) {

            if (userData.email == data.users[i].email && userData.password == data.users[i].password) {
                // setlogged(true)
                // console.log(logged)
                localStorage.setItem("logged",true)
                localStorage.setItem("name",data.users[i].name)
                localStorage.setItem("email",data.users[i].email)
                navigate("/")
            } else {
                notValid()
            }
        }

    }




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
                        <input type='password' placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} />
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