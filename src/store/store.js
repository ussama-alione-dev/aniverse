import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./slices/animeSlice";
import favoriteReducer from "./slices/favoritesSlice";

export const store = configureStore({
    reducer: {
        anime: animeReducer,
        favorites: favoriteReducer,
    },
});
