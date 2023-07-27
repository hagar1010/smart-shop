import React, { useState } from 'react'

import { AiOutlineCaretLeft } from 'react-icons/ai'
import special1 from '../../../assets/images/special1.png'
import special2 from '../../../assets/images/special2.png'
import special3 from '../../../assets/images/special3.png'

import "./productsSidebar.css"
import { Link } from 'react-router-dom'
import ProductsContent from '../productsContent/productsContent'

const ProductsSidebar = () => {
  const initSpecial = [
    {
      id: "1",
      name: "فستان ازرق عصري للسيدات",
      price: "ج.م 800",
      image: special1
    },
    {
      id: "8",
      name: "فستان اسود عصري للسيدات",
      price: "800 ج.م",
      image: special2
    },
    {
      id: "7",
      name: "فستان ابيض عصري للسيدات",
      price: "800 ج.م",
      image: special3
    },
  ]
  const [special, setState] = useState(initSpecial);




  const [categoryShow, setCategory] = useState("true")
  const [priceShow, setPrice] = useState("true")
  const [sizeShow, setSize] = useState("true")
  const [colorShow, setColor] = useState("true")
  const [brandShow, setBrand] = useState("true")
  const [specialShow, setSpecial] = useState("true")


  const [chossedSize, setChossed] = useState("")


  return (
    <section className='products-content'>
      <ProductsContent chossed={chossedSize}/>
      <section>
        <div className='category-filter'>
          <div
            className="filter-title"
            onClick={() => {
              setCategory(!categoryShow)
            }}>
            <h3>الفئات</h3>
            <AiOutlineCaretLeft />
          </div>
          {
            categoryShow ?
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
              : null
          }
        </div>

        <div className='price-filter'>
          <div
            className="filter-title"
            onClick={() => {
              setPrice(!priceShow)
            }}>
            <h3>السعر</h3>
            <AiOutlineCaretLeft />
          </div>
          {
            priceShow ?
              <div>
                <input type='range' />
                <div className='price-range'>
                  <small>1000 ج.م</small>
                  <small>10 ج.م</small>
                </div>
              </div>
              : null
          }
        </div>

        <div className='size-filter'>
          <div
            className="filter-title"
            onClick={() => {
              setSize(!sizeShow)
            }}>
            <h3>المقاس</h3>
            <AiOutlineCaretLeft />
          </div>
          {
            sizeShow ?
              <div className="sizes">
                <span onClick={()=>{setChossed("XL")}}>XL</span>
                <span onClick={()=>{setChossed("L")}}>L</span>
                <span onClick={()=>{setChossed("M")}}>M</span>
                <span onClick={()=>{setChossed("S")}}>S</span>
                <span onClick={()=>{setChossed("XS")}}>XS</span>
              </div>
              : null
          }
        </div>

        <div className='color-filter'>
          <div
            className="filter-title"
            onClick={() => {
              setColor(!colorShow)
            }}>
            <h3>اللون</h3>
            <AiOutlineCaretLeft />
          </div>
          {
            colorShow ?
              <div className='colors-btns'>
                <button className='green'></button>
                <button className='purple'></button>
                <button className='blue'></button>
                <button className='yellow'></button>
                <button className='red'></button>
              </div>
              : null
          }
        </div>

        <div className="brand-filter">
          <div
            className="filter-title"
            onClick={() => {
              setBrand(!brandShow)
            }}>
            <h3>العلامة التجارية</h3>
            <AiOutlineCaretLeft />
          </div>
          {
            brandShow ?
              <div>
                <p>سوني</p>
                <p>جونسون & هاندسون</p>
                <p>ابل</p>
                <p>جوجل</p>
                <p>سامسونج</p>
              </div>
              : null
          }

        </div>







        <div className='special-pros'>
          <div
            className="filter-title"
            onClick={() => {
              setSpecial(!specialShow)
            }}>
            <h3>عناصر مميزة</h3>
            <AiOutlineCaretLeft />
          </div>
          {
            specialShow ?
              special.map((special, index) => (
                <Link to={`/Products/${special.id}`} key={index}>
                  <div className='special-pro'>
                    <div>
                      <p>{special.name}</p>
                      <h5>{special.price}</h5>
                    </div>
                    <img src={special.image} alt="" />
                  </div>
                </Link>
              ))
              : null
          }
        </div>
      </section>
    </section>
  )
}

export default ProductsSidebar