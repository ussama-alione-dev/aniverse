import { createSlice } from "@reduxjs/toolkit";
import { addToFavorite, fetchFavorites } from "../thunks/favoritesThunk";

const initialState = {
    favorites: [],

    AddToFavoritesloading: false,
    fetchFavoritesLoading: false,

    AddToFavoriteserror: null,
    fetchFavoritesError: null,
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

        // fetch favorites
        builder
            .addCase(fetchFavorites.pending, (state) => {
                state.fetchFavoritesLoading = true;
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.fetchFavoritesLoading = false;
                state.favorites = action.payload;
            })
            .addCase(fetchFavorites.rejected, (state, action) => {
                state.fetchFavoritesLoading = false;
                state.fetchFavoritesError = action.payload;
            });
    },
});

export default favoriteSlice.reducer;
