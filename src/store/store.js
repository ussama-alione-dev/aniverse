import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./slices/animeSlice";

export const store = configureStore({
    reducer: {
        anime: animeReducer,
    },
});
