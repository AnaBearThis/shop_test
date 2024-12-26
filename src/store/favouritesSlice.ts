import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavouriteProduct {
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

interface FavouritesState {
    favourites: FavouriteProduct[];
}

const initialState: FavouritesState = {
    favourites: [],
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourites: (state, action: PayloadAction<FavouriteProduct>) => {
            state.favourites.push(action.payload);
        },
        removeFromFavourites: (state, action: PayloadAction<number>) => {
            state.favourites = state.favourites.filter(product => product.id !== action.payload);
        },
    },
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
