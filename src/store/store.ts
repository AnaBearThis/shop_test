import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import favouritesReducer from './favouritesSlice';
import cartReducer from './cartSlice';
import pageReducer from './pageSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        favourites: favouritesReducer,
        cart: cartReducer,
        page: pageReducer,
    },
});

export default store;
