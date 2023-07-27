import React, { useState, useEffect } from 'react'
import Coupon from '../coupon/coupon'
import { BsX } from "react-icons/bs";
import { Link } from 'react-router-dom'
import nocart from '../../../assets/images/not found.png'

// import { useSelector } from 'react-redux';

import './cartTable.css'

const CartTable = () => {

  // const cartItems = useSelector(state => state.cart.cartItems)
  // console.log(cartItems)
  let data = require('../../../db.json');

  const [cartItems, setCartItems] = useState(data.cart)



  const removeCart = (cartItem) => {
    try {
      const fetchUsers = async () => {
        const response = await fetch(`http://localhost:8000/cart/${cartItem.id}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
      }
      fetchUsers()
    } catch (e) {
      console.log(e);
    }
  }



  const removeAllCart = () => {
    try {
      const fetchUsers = async () => {
        const response = await fetch(`http://localhost:8000/cart`, {
          method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
      }
      fetchUsers()
    } catch (e) {
      console.log(e);
    }
  }



  // useEffect(() => {
  //     removeCart()
  // },[]);




  //-----------------------count
  const increase = (index) => {
    const cart = [...cartItems]
    cart[index].count++
    setCartItems(cart)
  }
  const decrease = (index) => {
    const cart = [...cartItems]
    cart[index].count--
    setCartItems(cart)
  }




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
            cartItems.length ?
              cartItems.map((cartItem, index) => (
                <div className="cart-item" key={index}>
                  <h5>ج.م {cartItem.count * cartItem.price}</h5>
                  <div className="amount">
                    {/* <input
                    type="number"
                    min="1"
                    value={count}
                    onChange={e => setCount(e.target.value)
                    }
                  /> */}
                    <button onClick={() => {
                      increase(index)
                    }
                    }>+</button>
                    <p>{cartItem.count}</p>
                    <button onClick={() => {
                      if (cartItem.count != 1)
                        decrease(index)
                    }}>-</button>
                  </div>
                  <h5>ج.م {cartItem.price}</h5>
                  <Link to={`/Products/${cartItem.id}`}>
                    <div className='cart-item-img'>
                      <div>
                        <h5>{cartItem.name}</h5>
                        <p>اللون : ابيض</p>
                        <p>{cartItem.size} : المقاس</p>
                      </div>
                      <img src={cartItem.image} alt="" />
                    </div>
                  </Link>
                  <BsX onClick={() => {
                    removeCart(cartItem)
                    window.location.reload();/////
                  }} />
                </div>
              ))
              :
              <img src={nocart} style={{ display: "block", marginTop: 50, margin: "auto" }} />
          }
        </div>



        {
          cartItems.length ?
            <div className="cart-table-footer">
              <button onClick={() => {
                setCartItems([])
              }}>مسح السلة</button>
              <Link to="/Products">
                <button>واصل التسوق</button>
              </Link>
            </div>
            :
            <div className="cart-table-footer">
              <Link to="/Products">
                <button>اذهب للتسوق</button>
              </Link>
            </div>
        }
      </div>
    </section>
  )
}

export default CartTable