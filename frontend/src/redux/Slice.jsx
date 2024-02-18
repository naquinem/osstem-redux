import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../axios/axios";
import { Navigate } from "react-router-dom";



export const loginData = createAsyncThunk("loginData",
    async(data) => {
        try{
            const response = await axiosClient.post('/login', data);
            if(response.data.status === 200) {
                <Navigate to="/" />
            }
            localStorage.setItem("token", response.data.token);
            return response.json()
            
        }
        catch(error) {
            return Promise.reject(error)
        }
    }
);
export const registerData = createAsyncThunk("registerData",
    async(data) => {
        
        try{
            const response = await axiosClient.post('/register', data);
            return response.json()
        }
        catch(error){
            return Promise.reject(error)
        } 
    } 
);

const initialState = {
    registerData: [],
    loginData: [],
}

const dataSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        //register account
        builder.addCase(registerData.fulfilled, (state, action) => {
            state.registerData = action.payload
        });
        //login user
        builder.addCase(loginData.fulfilled, (state, action) => {
            state.isLoading = false
            state.loginData = action.payload
        });
    }
});

export default dataSlice.reducer;