import React from 'react'
import Coupon from '../coupon/coupon'
// import cart from '../../../assets/images/cart.png'
import { BsX } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import './cartTable.css'

const CartTable = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  // console.log(cartItems)

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
          {
            cartItems.map((cartItem, index) => (
              <div className="cart-item" key={index}>
                <h5>ج.م 2500</h5>
                <div className="amount">
                  <input type="number" min="1" />
                </div>
                <h5>{cartItem.price}</h5>
                <div className='cart-item-img'>
                  <div>
                    <h5>{cartItem.name}</h5>
                    <p>اللون : ابيض</p>
                    <p>{cartItem.size} : المقاس</p>
                  </div>
                  <img src={cartItem.image} alt="" />
                </div>
                <BsX />
              </div>
            ))
          }
        </div>



        <div className="cart-table-footer">
          <button>مسح السلة</button>
          <Link to="/Products">
            <button>واصل التسوق</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CartTable