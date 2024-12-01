import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers:{
        addCart(state,action){
            state.push(action.payload);
        },

    }

})

export const {addCart} = CartSlice.actions;
export default CartSlice.reducer;
