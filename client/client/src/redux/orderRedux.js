import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        order: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getorderStart: (state) => {
            state.isFetching =true
        },
        getorderSuccess: (state, action)=>{
            state.isFetching= false
            state.order= action.payload
        },
        getorderfaliure: (state)=>{
            state.isFetching= false
            state.error =true
        }
    },
});

export const {getorderStart, getorderSuccess, getorderfaliure}=orderSlice.actions
export default orderSlice.reducer
