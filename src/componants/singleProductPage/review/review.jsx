import React from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import review from "../../../assets/images/review.png"

import "./review.css"

const Review = () => {
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
                    <span>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />&nbsp; &nbsp; : تقييمك
                    </span>
                    <form action="" method="">
                        <input type="text" placeholder="عنوان التقييم" />
                        <textarea placeholder="اكتب تقييمك هنا"></textarea>
                        <div className="yourinfo-inputs">
                            <input type="text" placeholder="بريدك الالكتروني" />
                            <input type="text" placeholder="اسمك" />
                        </div>
                        <input type="submit" value="اضف الان" />
                    </form>
                </div>
                <div>
                    <h4>تقييمات 10</h4>
                    <div className='comment'>
                        <div className="comment-info">
                            <h3>منتج رائع التعبئة والتغليف كانت جيدة ايضا</h3>
                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى</p>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <div className="name-date">
                                <p>ا9 اغسطس 2022</p>
                                <p>احمد بلال</p>
                            </div>
                        </div>
                        <img src={review} />
                    </div>
                    <div className='comment'>
                        <div className="comment-info">
                            <h3>منتج رائع التعبئة والتغليف كانت جيدة ايضا</h3>
                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى</p>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <div className="name-date">
                                <p>ا9 اغسطس 2022</p>
                                <p>احمد بلال</p>
                            </div>
                        </div>
                        <img src={review} />
                    </div>
                    <div className='comment'>
                        <div className="comment-info">
                            <h3>منتج رائع التعبئة والتغليف كانت جيدة ايضا</h3>
                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى</p>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <div className="name-date">
                                <p>ا9 اغسطس 2022</p>
                                <p>احمد بلال</p>
                            </div>
                        </div>
                        <img src={review} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review