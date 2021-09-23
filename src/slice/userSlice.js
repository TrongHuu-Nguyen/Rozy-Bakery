import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getUserAPI = createAsyncThunk('user/getUserAPI', async () => {
    const listUser = await axios
        .get('http://localhost:3001/User')
        .then(res => res)
        .catch(e => console.log(e));
    return listUser.data
})

export const addUserAPI = createAsyncThunk('user/addUserAPI', async (payload) => {
    await axios
        .post('http://localhost:3001/User', payload)
        .then(res => res)
        .catch(e => console.log(e));
})

export const setCartUserAPI = createAsyncThunk('user/setCartUserAPI', async (payload) => {
    await axios
        .patch(`http://localhost:3001/User/${payload.id}`,
            {
                "userCart": payload.idItems
            })
        .then(res => res)
        .catch(e => console.log(e));
})
const userSlice = createSlice({
    name: "user",
    initialState: {
        list: [],
        loading: false,
        error: '',

    },
    reducers: {
    },

    extraReducers: {
        //get list user
        [getUserAPI.pending]: (state) => {
            state.loading = true;
        },
        [getUserAPI.fulfilled]: (state, action) => {
            state.list = (action.payload);
            state.loading = false;
        },
        [getUserAPI.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },

        // add new user
        [addUserAPI.pending]: (state) => {
            state.loading = true;

        },
        [addUserAPI.fulfilled]: (state, action) => {
            state.list.push(action.payload);

        },
        [addUserAPI.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
    }
})

const { reducer: userReducer} = userSlice;
export default userReducer;