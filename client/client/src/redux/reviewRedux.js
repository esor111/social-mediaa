import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        review: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getReviewStart: (state) => {
            state.isFetching =true
        },
        getReviewSuccess: (state, action)=>{
            state.isFetching= false
            state.review= action.payload
        },
        getReviewfaliure: (state)=>{
            state.isFetching= false
            state.error =true
        },
       deleteReviewStart: (state) => {
            state.isFetching =true
        },
       deleteReviewSuccess: (state, action)=>{
            state.isFetching= false
            state.review.filter(review=> review._id !== action.payload)
        },
       deleteReviewfaliure: (state)=>{
            state.isFetching= false
            state.error =true
        }
    },
});

export const {getReviewStart, getReviewSuccess, getReviewfaliure, deleteReviewStart, deleteReviewfaliure, deleteReviewSuccess}=reviewSlice.actions
export default reviewSlice.reducer
