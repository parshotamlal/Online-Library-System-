import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Features/BookSlice.js"
export const Store = configureStore({

    reducer: bookReducer


})