import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        price: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.price = state.quantity * state.price
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        delteProduct: (state, action) => {
            state.products.filter(state => state._id !== action.payload)
        },
    }
})

export const { addProduct, delteProduct } = cartSlice.actions
export default cartSlice.reducer
