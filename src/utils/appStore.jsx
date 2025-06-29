import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartItems"

const appStore = configureStore({
    reducer: {
       cart: cartReducer,
    }
});

export default appStore;