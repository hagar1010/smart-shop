import React from 'react'
import './coupon.css'

const Coupon = () => {
  return (
    <section className='coupon'>
      <h3>الكوبون</h3>
      <small>ادخل رمز الكوبون الخاص بك ان كان لديك واحد</small>
      <div>
        <button>تاكيد الكوبون</button>
        <input placeholder='رمز الكوبون'/>
      </div>
      <h3>ملحوظة</h3>
      <small>اضافة ملحوظة للبائع</small>
      <textarea placeholder='... اكتب ملحوظتك هنا'></textarea>
      <div className='total'>
        <p>ج.م 6000</p>
        <p>المجموع الفرعي</p>
      </div>
      <div className='total'>
        <p>ج.م 6000</p>
        <p>المجموع الاجمالي</p>
      </div>
      <small>الشحن والضرائب محسوبة عند الدفع</small>
      <div className="total">
        <button>الدفع</button>
        <button>تحديث السلة</button>
      </div>
    </section>
  )
}

export default Coupon