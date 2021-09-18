import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';
import userReducer from '../slice/userSlice'
import cartReducer from '../slice/cartSlice'


const store = configureStore({ 
 reducer: {
 products: productReducer,
 user:userReducer,
 cart:cartReducer
 },
})
export default store 