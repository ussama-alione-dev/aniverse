import { createSlice } from "@reduxjs/toolkit";
import {
    addToFavorite,
    fetchFavorites,
    removeFromFavorite,
} from "../thunks/favoritesThunk";

const initialState = {
    favorites: [],

    AddToFavoritesloading: false,
    fetchFavoritesLoading: false,
    removeFromFavoritesLoading: false,

    AddToFavoriteserror: null,
    fetchFavoritesError: null,
    removeFromFavoritesError: null,
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

        // remove from favorites
        builder
            .addCase(removeFromFavorite.pending, (state) => {
                state.removeFromFavoritesLoading = true;
            })
            .addCase(removeFromFavorite.fulfilled, (state, action) => {
                state.removeFromFavoritesLoading = false;
                state.favorites = state.favorites.filter(
                    (favorite) => favorite.animeId !== action.payload,
                );
            })
            .addCase(removeFromFavorite.rejected, (state, action) => {
                state.removeFromFavoritesLoading = false;
                state.removeFromFavoritesError = action.payload;
            });
    },
});

export default favoriteSlice.reducer;
