import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import defUser from "../../../assets/images/defualtUser.png"
import review1 from "../../../assets/images/review-1.png"
import review2 from "../../../assets/images/review-2.png"
import review3 from "../../../assets/images/review-3.png"

import "./review.css"

const Review = () => {
    const initComments = [
        {
            name: "احمد بلال",
            rating: 3,
            date: "ا9 اغسطس 2022",
            title: "منتج رائع التعبئة والتغليف كانت جيدة ايضا",
            desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
            img: review1
        },
        {
            name: "مريم مرعي",
            rating: 1,
            date: "ا5 فيراير 2019",
            title: "لا يجب ان تشتري هذا المنتج",
            desc: "انا مكسلة سيكا لالالالاه صل عل الرسول يمكن أن يستبدل الأخرى",
            img: review2
        },
        {
            name: "محمد حسن",
            rating: 5,
            date: "ا20 يناير 2021",
            title: "الدنيا حرررر مين بس بيحب الصيف",
            desc: "ستبدل في نفس النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
            img: review3
        },
    ]

    const [commentsData, setCommentsData] = useState(initComments)


    //----------------ADD REVIEW--------------
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [rating, setRating] = useState(0)

    //get current date :-
    function show_time(date) {
        var year = date.getFullYear()
        var day = date.getDay()
        var month_index = date.getMonth()
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Seb", "Oct", "Nov", "Dec"]
        var date = year + " " + months[month_index] + " " + day
        return date
    }
    var current = new Date()
    const date = show_time(current)



    const addReview = () => {
        let commentData = { title, desc, name, email, rating, date, img: defUser }
        const comments = [...commentsData]
        comments.push(commentData)
        setCommentsData(comments)
        setTitle("")
        setDesc("")
        setName("")
        setEmail("")
        setRating(0)
    }



    //anather way??
    const emp = [0, 1, 2, 3, 4]

    return (
        <section className="review-container">
            <div className="review-tab">
                <button className='active-review-tab'>تقييمات المنتج</button>
                <button>معلومات اضافيه</button>
                <button>الوصف</button>
            </div>
            <div className="reviews">
                <div className="your-review">
                    <h2>اضف تقييم</h2>
                    {
                        rating ?
                            <span>
                                {
                                    emp.filter((item, length) => length < 5 - rating).map((item, index) => {
                                        return <AiOutlineStar key={index} />
                                    })
                                }
                                {
                                    emp.filter((item, length) => length < rating).map((item, index) => {
                                        return <AiFillStar key={index} />
                                    })
                                }
                                &nbsp; &nbsp; : تقييمك
                            </span>
                            :
                            <span>
                                <AiOutlineStar onClick={() => { setRating(5) }} />
                                <AiOutlineStar onClick={() => { setRating(4) }} />
                                <AiOutlineStar onClick={() => { setRating(3) }} />
                                <AiOutlineStar onClick={() => { setRating(2) }} />
                                <AiOutlineStar onClick={() => { setRating(1) }} />
                                &nbsp; &nbsp; : تقييمك
                            </span>
                    }

                    <form action="" method="">
                        <input type="text" placeholder="عنوان التقييم" value={title} onChange={e => setTitle(e.target.value)} />
                        <textarea placeholder="اكتب تقييمك هنا" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                        <div className="yourinfo-inputs">
                            <input type="text" placeholder="بريدك الالكتروني" value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="text" placeholder="اسمك" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                    </form>
                    <input type="submit" value="اضف الان" onClick={() => {
                        addReview()
                    }} />
                </div>
                <div>
                    <h4>{commentsData.length} تقييمات</h4>
                    {
                        commentsData.map((comment, index) => (
                            <div className='comment' key={index}>
                                <div className="comment-info">
                                    <h3>{comment.title}</h3>
                                    <p>{comment.desc}</p>
                                    {
                                        emp.filter((item, length) => length < 5 - comment.rating).map((item, index) => {
                                            return <AiOutlineStar key={index} />
                                        })
                                    }
                                    {
                                        emp.filter((item, length) => length < comment.rating).map((item, index) => {
                                            return <AiFillStar key={index} />
                                        })
                                    }
                                    <div className="name-date">
                                        <p>{comment.date}</p>
                                        <p>{comment.name}</p>
                                    </div>
                                </div>
                                <img src={comment.img} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Review