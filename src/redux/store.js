import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer"

export const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})