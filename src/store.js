import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/features/cart/CartSlice'
import modalReducer from '../src/features/modal/ModalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    },
})
