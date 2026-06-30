import { createSlice } from "@reduxjs/toolkit";

import { fetchTrendingAnime } from "../features/animeThunk";

const initialState = {
    trendingAnime: [],
    loading: false,
    error: null,
};

const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrendingAnime.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchTrendingAnime.fulfilled, (state, action) => {
            state.loading = false;
            state.trendingAnime = action.payload;
        });
        builder.addCase(fetchTrendingAnime.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default animeSlice.reducer;
