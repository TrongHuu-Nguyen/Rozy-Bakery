import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getUsertAPI=createAsyncThunk('user/getUsertAPI', async()=> {
    const listUser = await axios
        .get('http://localhost:3001/User')
        .then(res=> res)
        .catch(e=>console.log(e));
    return listUser.data
})

export const addCartUserAPI=createAsyncThunk('user/addCartUserAPI', async(payload)=> {
    await axios
        .patch(
            `http://localhost:3001/User/${payload.id}`,payload)
        .then(res=> res)
        .catch(e=>console.log(e));
})

const userSlice=createSlice({
    name:"user",
    initialState:{ 
        list:[],
        loading:false,
        error:''
    },
    reducers: {},

    extraReducers: {
        [getUsertAPI.pending]:(state)=>{
            state.loading=true;
        },
        [getUsertAPI.fulfilled]:(state, action)=>{
            state.list=(action.payload);
            state.loading=false;
        },
        [getUsertAPI.rejected]:(state, action)=>{
            state.error=action.error;
            state.loading=false;
        },

        [addCartUserAPI.pending]:(state)=>{
            
        },
        [addCartUserAPI.fulfilled]:(state, action)=>{
            
        },
        [addCartUserAPI.rejected]:(state, action)=>{
            
        }
    }
})

const { reducer : userReducer } = userSlice;
export default userReducer;