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
        editProduct: (state, action) => {
            const productIndex = state.products.findIndex((pr) => pr.id === action.payload.id);
            if (productIndex !== -1) {
                state.products[productIndex] = action.payload;
                localStorage.setItem("products", JSON.stringify(state.products));
            }

        },
        deleteProduct: (state, action) => {
            const productIndex = state.products.findIndex((pr) => pr.id === action.payload.id);
            if (productIndex !== -1) {
                state.products[productIndex] = action.payload;
                localStorage.setItem("products", JSON.stringify(state.products));
            }

        },
       
        userLogin: (state) => {

        }
    }
});

export const { addProduct, userLogin, editProduct, deleteProduct,  } = productSlice.actions;
export default productSlice.reducer;