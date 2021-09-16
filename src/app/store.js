import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';
import userReducer from '../slice/userSlice'


const store = configureStore({ 
 reducer: {
 products: productReducer,
 user:userReducer
 },
})
export default store