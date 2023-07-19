import {createSlice, current} from "@reduxjs/toolkit"
import pro1 from '../assets/images/1.png'
import pro2 from '../assets/images/2.png'
import pro6 from '../assets/images/6.png'

const cartSlice=createSlice({
    name: "cart",
    initialState:{
    cartItems:[
        // {
        //     id: "1",
        //     name: "فستان سهرات ازرق",
        //     image: pro1,
        //     price: "800 ج.م",
        //     price_before: "900 ج.م",
        //     rating: 4,
        //     size: "XL"
        // },
        // {
        //     id: "2",
        //     name: "شيرت منزلي رجالي",
        //     image: pro2,
        //     price: "250 ج.م",
        //     price_before: "300 ج.م",
        //     rating: 3,
        //     size: "XL"
        // },
        // {
        //     id: "6",
        //     name: "فستان صيفي",
        //     image: pro6,
        //     price: "700 ج.م",
        //     price_before: "955 ج.م",
        //     rating: 5,
        //     size: "XL"
        // }
    ]},
    reducer:{
        addToCart: (state, action) => {
            // const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            // if (itemInCart) {
            //   itemInCart.quantity++;
            // } else {
              state.cartItems.push({ ...action.payload });
            // }
          },
          removeItem: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
            state.cartItems = removeItem;
          },
    }
})
export default cartSlice.reducer
export const {
    addToCart,
    removeItem,
  } = cartSlice.actions;
