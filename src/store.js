import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./features/CartSlice.js";
import ProductSlice from "./features/ProductSlice.js";

const store = configureStore({
    reducer:{
        cart:CartSlice,
        production:ProductSlice,
    }
})

export default store;