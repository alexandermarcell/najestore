import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {

            const { _id } = payload;

            const itemIndex = state.findIndex((item) => item._id === _id);
            
            if(itemIndex > -1){
                return state.map((item) => {
                    if(item._id === _id){
                        return {
                            ...item, 
                            quantity: item.quantity + 1
                        }
                    }
                    return item;
                })
            } else {
                state.push({
                    ...payload, 
                    quantity: 1
                })
            }
        },
        increment: (state, { payload }) => {
            return state.map((item) => {
                if(item._id === payload){
                    return {
                        ...item, 
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
        },
        decrement: (state, { payload }) => {
            return state.map((item) => {
                if(item._id === payload){
                    return {
                        ...item, 
                        quantity: item.quantity - 1
                    }
                }
                return item;
            })
        },
        remove: (state, { payload }) => {
            return state = state.filter((item) => item._id !== payload);

        },
        clear: (state) => {
            return [];
        }
    }
})

export const { clear, increment, decrement, remove, addToCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;