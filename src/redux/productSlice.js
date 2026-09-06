import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productSlice",

    initialState: {
        products: JSON.parse(localStorage.getItem("products")) || [],
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
        
    },

    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem(
                "products",
                JSON.stringify(state.products)
            );
        },
        userLogin: (state) => {

        }
    }
});

export const { addProduct , userLogin} = productSlice.actions;
export default productSlice.reducer;