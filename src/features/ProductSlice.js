import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    data:[],
    loading:true,
    error:"",

}


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProducts(state,action){
            state.data = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getProducts.pending,(state) => {
            state.loading = true;
            // state.data =action.payload;
        })
        builder.addCase(getProducts.fulfilled,(state, action) => {
            state.loading = false;
            state.data = action.payload;

        })
        builder.addCase(getProducts.rejected,(state) => {
            state.loading = false;
            state.error ="Error fetching data from API"

        })
    }
})


export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;


export const getProducts = createAsyncThunk('products/get',async()=>{
    const data = await fetch("https://fakestoreapi.com/products");
    const result = data.json();
    return result;
})

// Creating a middleware
// export function getProductDataThunk(){
//      return async function getProduct(dispatch){
//         await fetch("https://fakestoreapi.com/products")
//             .then(response=>response.json())
//             .then(data=>dispatch(fetchProducts(data)))
//
//
//     }
// }