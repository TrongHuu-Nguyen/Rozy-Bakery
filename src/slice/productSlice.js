import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import _ from 'lodash'

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
        error:'',
        comments:0
    },

    reducers: {
        countComment(state,action) {
            state.comments=action.payload
        }
    },

    extraReducers: {
        [getProductAPI.pending]:(state)=>{
            state.loading=true;
        },
        [getProductAPI.fulfilled]:(state, action)=>{
            state.list=_.shuffle(action.payload);
            state.loading=false;
        },
        [getProductAPI.rejected]:(state, action)=>{
            state.error=action.error;
            state.loading=false;
        }
    }
})

const { reducer : productReducer,actions } = productSlice;
export const { countComment } = actions;
export default productReducer;