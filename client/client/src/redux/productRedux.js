import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    getProductfaliure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteProductStart: (state) => {
        state.isFetching = true;
      },
      deleteProductSuccess: (state, action) => {
        state.isFetching = false;
        state.products.filter((list) => list._id !== action.payload);
      },
      deleteProductfaliure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      updateProductStart: (state) => {
        state.isFetching = true;
      },
      updateProductSuccess: (state, action) => {
        state.isFetching = false;
        state.products.push(action.payload)
      },
      updateProductfaliure: (state) => {
        state.isFetching = false;
        state.error = true;
      },

  },
});

 export const { getProductStart, getProductSuccess, getProductfaliure,deleteProductStart, deleteProductSuccess, deleteProductfaliure,
  updateProductStart, updateProductSuccess, updateProductfaliure
} =
  ProductSlice.actions;
export default ProductSlice.reducer;
