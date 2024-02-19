import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../axios/axios";



export const createData = createAsyncThunk('createData', async(info) => {

    try {
        const response = await axiosClient.post('/store', info);
        if(response.status == 200){
            window.location.href = '/';
        }

    }
    catch (error) {
        console.log(error);
        throw error
    }
    
})

const dataSlice = createSlice({
    name: "todo",
    initialState: {
        data: [],
        isLoading: true,
    },
    reducers: {
        fetchData: (state, action) => {
            state.isLoading = false,
            state.data = action.payload
        },
        postData: (state, action) => {
            state.data.push(action.payload);
        },
        updateData: (state, action) => {
            const index = state.data.findIndex((data) => {
                data.id == action.payload.id;
            });
            if(index !== -1) {
                state.data[index] = action.payload;
            }
        },
        deleteData: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createData.fulfilled, (state, action) => {
            state.isLoading = false;
            Object.keys(state.data.push(action.payload));
        });
    }
});
export const {fetchData, postData, updateData, deleteData} = dataSlice.actions;
export default dataSlice.reducer;