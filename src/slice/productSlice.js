import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getProductAPI=createAsyncThunk('product/getProductAPI', async()=> {
    const listProduct = await axios
        .get('http://localhost:3001/ProductData')
        .then(res=> res)
        .catch(e=>console.log(e));
    return listProduct.data
})

export const addCommentAPI=createAsyncThunk('product/addCommentAPI', async(payload)=> {
    await axios
        .put(
            `http://localhost:3001/ProductData/${payload.id}`,payload)
        .then(res=> res)
        .catch(e=>console.log(e));
})

const productSlice=createSlice({
    name:"product",
    initialState:{ 
        list:[],
        loading:false,
        error:''
    },

    reducers: {},

    extraReducers: {
        [getProductAPI.pending]:(state)=>{
            state.loading=true;
        },
        [getProductAPI.fulfilled]:(state, action)=>{
            state.list=(action.payload);
            state.loading=false;
        },
        [getProductAPI.rejected]:(state, action)=>{
            state.error=action.error;
            state.loading=false;
        }
    }
})

const { reducer : productReducer } = productSlice;
export default productReducer;