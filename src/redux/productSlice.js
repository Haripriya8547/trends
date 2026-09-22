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
            state.products = state.products.filter(
                (pr) => pr.id !== action.payload
            );

            localStorage.setItem(
                "products",
                JSON.stringify(state.products)
            );
        },

       addToCart: (state, action) => {

            const product = action.payload;

            const existingProduct = state.cartItems.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {

                existingProduct.quantity += product.quantity || 1;

            } else {

                state.cartItems.push({
                    ...product,
                    quantity: product.quantity || 1
                });

            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        },

        incrementCartitemQuantity: (state, action) => {

            const product = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (product) {
                product.quantity += 1;
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        },

        decrementCartitemQuantity: (state, action) => {

            const product = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        },

        deleteProduct: (state, action) => {

            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        }
    }
});

export const { addProduct, userLogin, editProduct, deleteProduct, addToCart, incrementCartitemQuantity, decrementCartitemQuantity } = productSlice.actions;
export default productSlice.reducer;