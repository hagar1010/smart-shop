import React from 'react'
import Coupon from '../coupon/coupon'
import cart from '../../../assets/images/cart.png'
import { BsX } from "react-icons/bs";

import './cartTable.css'

const CartTable = () => {
  return (
    <section className='cart-page-container'>
      <Coupon />
      <div className="cart-table">
        <h2>سلة التسوق</h2>
        <div className='cart-table-heading'>
          <h3>المجموع</h3>
          <h3>الكمية</h3>
          <h3>السعر</h3>
          <h3>المنتج</h3>
        </div>

<div>
        <div className="cart-item">
          <h5>ج.م 2500</h5>
          <div className="amount">
            <input type="number" min="1" />
          </div>
          <h5>ج.م 2500</h5>
          <div className='cart-item-img'>
            <div>
              <h5>فستان ابيض عصري</h5>
              <p>اللون : ابيض</p>
              <p>XL : المقاس</p>
            </div>
            <img src={cart} alt="" />
          </div>
          <BsX />
        </div>

        <div className="cart-item">
          <h5>ج.م 2500</h5>
          <div className="amount">
            <input type="number" min="1" />
          </div>
          <h5>ج.م 2500</h5>
          <div className='cart-item-img'>
            <div>
              <h5>فستان ابيض عصري</h5>
              <p>اللون : ابيض</p>
              <p>XL : المقاس</p>
            </div>
            <img src={cart} alt="" />
          </div>
          <BsX />
        </div>

        <div className="cart-item">
          <h5>ج.م 2500</h5>
          <div className="amount">
            <input type="number" min="1" />
          </div>
          <h5>ج.م 2500</h5>
          <div className='cart-item-img'>
            <div>
              <h5>فستان ابيض عصري</h5>
              <p>اللون : ابيض</p>
              <p>XL : المقاس</p>
            </div>
            <img src={cart} alt="" />
          </div>
          <BsX />
        </div>
        </div>
        <div className="cart-table-footer">
          <button>مسح السلة</button>
          <button>واصل التسوق</button>
        </div>

      </div>
    </section>
  )
}

export default CartTable