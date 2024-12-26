import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
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

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;
