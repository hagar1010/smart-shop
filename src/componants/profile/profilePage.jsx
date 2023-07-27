import React from 'react'
import './profilePage.css'
import coverPic from "../../assets/images/cover-pic.png"
import user1 from "../../assets/images/user-1.png"

const Profile = () => {
    return (
        // <div class="container">
        <div class="profile-main">
            <div class="profile-container">
                <img src={coverPic} width="100%" />

                <div class="profile-container-inner">
                    <img src={user1} class="profile-pic" />
                    <h1>هاجر جمال</h1>
                    <b>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى</b>
                    <p>مصر, الغربية, طنطا &middot; <a href="#">معلومات الاتصال</a></p>
                    <div class="profile-btn">
                        <a href="#" class="primery-btn">تواصل</a>
                        <a href="#">ارسل رسالة</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile