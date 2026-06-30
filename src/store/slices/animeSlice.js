import { createSlice } from "@reduxjs/toolkit";

import { fetchTrendingAnime, fetchSeasonalAnime } from "../features/animeThunk";

const initialState = {
    trendingAnime: [],
    seasonalAnime: [],
    TopAnimeLoading: false,
    SeasonalAnimeLoading: false,

    TopAnimeError: null,
    SeasonalAnimeError: null,
};

const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrendingAnime.pending, (state) => {
            state.TopAnimeLoading = true;
            state.TopAnimeError = null;
        });
        builder.addCase(fetchTrendingAnime.fulfilled, (state, action) => {
            state.TopAnimeLoading = false;
            state.trendingAnime = action.payload;
        });
        builder.addCase(fetchTrendingAnime.rejected, (state, action) => {
            state.TopAnimeLoading = false;
            state.TopAnimeError = action.payload;
        });
        builder.addCase(fetchSeasonalAnime.pending, (state) => {
            state.SeasonalAnimeLoading = true;
            state.SeasonalAnimeError = null;
        });
        builder.addCase(fetchSeasonalAnime.fulfilled, (state, action) => {
            state.SeasonalAnimeLoading = false;
            state.seasonalAnime = action.payload;
        });
        builder.addCase(fetchSeasonalAnime.rejected, (state, action) => {
            state.SeasonalAnimeLoading = false;
            state.SeasonalAnimeError = action.payload;
        });
    },
});

export default animeSlice.reducer;
