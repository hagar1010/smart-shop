import React, { useState } from 'react'

import { AiOutlineCaretLeft } from 'react-icons/ai'
import special1 from '../../../assets/images/special1.png'
import special2 from '../../../assets/images/special2.png'
import special3 from '../../../assets/images/special3.png'

import "./productsSidebar.css"
import { Link } from 'react-router-dom'

const ProductsSidebar = () => {
  const initSpecial = [
    {
      name: "فستان ازرق عصري للسيدات",
      price: "ج.م 800",
      image: special1
    },
    {
      name: "فستان اسود عصري للسيدات",
      price: "800 ج.م",
      image: special2
    },
    {
      name: "فستان ابيض عصري للسيدات",
      price: "800 ج.م",
      image: special3
    },
  ]
  const [special, setState] = useState(initSpecial);

  return (
    <section>
      <div className='category-filter'>
        <div className="filter-title">
          <h3>الفئات</h3>
          <AiOutlineCaretLeft />
        </div>
        <ul>
          <li>
            <p>+</p>
            <p>الاكسسوارات</p>
          </li>
          <li>
            <p>+</p>
            <p>ملابس</p>
          </li>
          <li>
            <p>+</p>
            <p>الالكترونيات</p>
          </li>
          <li>
            <p>+</p>
            <p>الاثاث</p>
          </li>
          <li>
            <p>+</p>
            <p>الاحذية</p>
          </li>

          <li>
            <p>+</p>
            <p>المجوهرات</p>
          </li>
          <li>
            <p>+</p>
            <p>اخرى</p>
          </li>
        </ul>
      </div>

      <div className='price-filter'>
        <div className="filter-title">
          <h3>السعر</h3>
          <AiOutlineCaretLeft />
        </div>
        <input type='range' />
        <div className='price-range'>
          <small>1000 ج.م</small>
          <small>10 ج.م</small>
        </div>
      </div>

      <div className='size-filter'>
        <div className="filter-title">
          <h3>المقاس</h3>
          <AiOutlineCaretLeft />
        </div>
        <div className="sizes">
          <span>XL</span>
          <span>L</span>
          <span>M</span>
          <span>S</span>
        </div>
      </div>

      <div className='color-filter'>
        <div className="filter-title">
          <h3>اللون</h3>
          <AiOutlineCaretLeft />
        </div>
        <div className='colors-btns'>
          <button className='green'></button>
          <button className='purple'></button>
          <button className='blue'></button>
          <button className='yellow'></button>
          <button className='red'></button>
        </div>
      </div>

      <div className="brand-filter">
        <div className="filter-title">
          <h3>العلامة التجارية</h3>
          <AiOutlineCaretLeft />
        </div>
        <p>سوني</p>
        <p>جونسون & هاندسون</p>
        <p>ابل</p>
        <p>جوجل</p>
        <p>سامسونج</p>
      </div>







      <div>
        <div className="filter-title">
          <h3>عناصر مميزة</h3>
          <AiOutlineCaretLeft />
        </div>
        {
          special.map((special, index) => (
            // <Link>
              <div className='special-pro' key={index}>
                <div>
                  <p>{special.name}</p>
                  <h5>{special.price}</h5>
                </div>
                <img src={special.image} alt="" />
              </div>
            // </Link>
          ))
        }
      </div>
    </section>
  )
}

export default ProductsSidebar