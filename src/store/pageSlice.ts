import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
    currentPage: string;
}

const initialState: PageState = {
    currentPage: 'Товары',
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<string>) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;
