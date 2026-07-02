import { createSlice } from "@reduxjs/toolkit";
import { addToFavorite } from "../thunks/favoritesThunk";

const initialState = {
    favorites: [],
    AddToFavoritesloading: false,
    AddToFavoriteserror: null,
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(addToFavorite.pending, (state) => {
                state.AddToFavoritesloading = true;
            })

            .addCase(addToFavorite.fulfilled, (state, action) => {
                state.AddToFavoritesloading = false;
                state.favorites.push(action.payload);
            })

            .addCase(addToFavorite.rejected, (state, action) => {
                state.AddToFavoritesloading = false;
                state.AddToFavoriteserror = action.payload;
            });
    },
});

export default favoriteSlice.reducer;
