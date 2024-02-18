import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../axios/axios";
import { useNavigate } from "react-router-dom";


const navigate = useNavigate();
export const postProductData = createAsyncThunk("postProductData",
    async(data) => {
        try{
            const response = await axiosClient.post('/store', data);
            if(response.data.status === 200) {
                navigate("/");
                return response.data;
            }      
        }
        catch(error) {
            return Promise.reject(error)
        }
    }
);
export const readProductData = createAsyncThunk("readProductData",
    async(data) => {
        
        try{
            const response = await axiosClient.post('/index', data);
            if(response.data.status === 200) {
                navigate("/");
                return response.data;
            }
        }
        catch(error){
            return Promise.reject(error)
        } 
    } 
);

const initialState = {
    readProduct: [],
    postProduct: [],
    isLoading: true,
}

const dataSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        //read product account from database
        builder.addCase(readProductData.fulfilled, (state, action) => {
            state.readProduct = action.payload
        });
        //post product data from database
        builder.addCase(postProductData.fulfilled, (state, action) => {
            state.isLoading = false
            state.postProduct = action.payload
        });
    }
});

export default dataSlice.reducer;