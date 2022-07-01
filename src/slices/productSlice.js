import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false,
    hasErrors: false
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state) => {
            state.loading = true;
        },
        getProductsSuccess: (state, { payload }) => {
            state.products = payload
            state.loading = false
            state.hasErrors = false
        },
        getProductsFailure: state => {
            state.loading = false
            state.hasErrors = true;
        },
    },
})

export const { getProducts, getProductsSuccess, getProductsFailure } = productsSlice.actions

export const productSelector = (state) => state.products

const productReducer = productsSlice.reducer;

export default productReducer

export function fetchProducts() {
    return async dispatch => {
        dispatch(getProducts())

        try {
            const response = await fetch('https://najeserver.herokuapp.com/api/v1/shop/items')
            const data = await response.json()
            
            dispatch(getProductsSuccess(data))
        } catch (error) {
            dispatch(getProductsFailure())
        }
    }
}