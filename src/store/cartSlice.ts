import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartProduct {
    id: number;
    available: boolean;
    name: string;
    price: number;
    preview_picture: string;
    labels: {
        discount: string,
        new: string
    },
    price_discount: number,
    quantity: number,
    reviews: number
}

interface CartState {
    cart: CartProduct[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const existingProduct = state.cart.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(product => product.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
