import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getProductCartAPI=createAsyncThunk('cart/getProductCartAPI', async()=> {
    const listProduct = await axios
        .get('http://localhost:3001/ProductData')
        .then(res=> res)
        .catch(e=>console.log(e));
    return listProduct.data
})

const cartSlice=createSlice({
    name:"cart",
    initialState:{ 
        list:[],
        total:0,
        loading:false,
        error:'',
        cart:[],
        wishList:[],
        orderList:[]
    },

    reducers: {
        setTotalCart(state,action){
            state.total=action.payload;
        },
        setItem(state, action) {
            state.cart=action.payload;
        },
        wishItem(state, action) {
            state.wishList=action.payload;
        },
        orderList(state, action) {
            state.orderList=action.payload;
        }
    },

    extraReducers: {
        [getProductCartAPI.pending]:(state)=>{
            state.loading=true;
        },
        [getProductCartAPI.fulfilled]:(state, action)=>{
            state.list=(action.payload);
            state.loading=false;
        },
        [getProductCartAPI.rejected]:(state, action)=>{
            state.error=action.error;
            state.loading=false;
        }
    }
})

const { reducer : cartReducer,actions } = cartSlice;
export const {setTotalCart,setItem,wishItem,orderList} = actions;
export default cartReducer;