import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../db.json";

// export const getItems = createAsyncThunk('cartItems/getItems', async() => {
//     return await fetch('http://localhost:8000/cartItems')
//     .then((res) => res.json())
//     .catch((error) => console.log(error))
// })



const cartSlice = createSlice({
    name: "cart",
    //買い物かごの初期化
    initialState: {
        cartItems: cartItems.cartItems,
        amount: 0,
        total: 0
    },
    reducers: {
        clearCart: (state) => {
            return { cartItems: [], amount: 0, total: 0 };
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    },
    // extraReducers: {
    //     [getItems.fulfilled]: (state, action) => {
    //       state.loading = false;
    //       state.cartItems = action.payload;
    //     },

    //   },
})

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
