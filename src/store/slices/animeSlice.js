import { createSlice } from "@reduxjs/toolkit";

import {
    fetchTrendingAnime,
    fetchSeasonalAnime,
    getAllAnime,
    fetchAnimeDetails,
} from "../thunks/animeThunk";

const initialState = {
    allAnime: [],
    trendingAnime: [],
    seasonalAnime: [],
    animeDetails: null,

    TopAnimeLoading: false,
    SeasonalAnimeLoading: false,
    allAnimeLoading: false,
    animeDetailsLoading: false,

    TopAnimeError: null,
    SeasonalAnimeError: null,
    allAnimeError: null,
    animeDetailsError: null,
};

const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers: {
        replaceAnimesWithStaticData: (state, action) => {
            state.allAnime = action.payload;
        },
    },
    extraReducers: (builder) => {
        // trending anime
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
        // seasonal anime
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
        // all anime
        builder.addCase(getAllAnime.pending, (state) => {
            state.allAnimeLoading = true;
            state.allAnimeError = null;
        });
        builder.addCase(getAllAnime.fulfilled, (state, action) => {
            state.allAnimeLoading = false;
            state.allAnime = action.payload;
        });
        builder.addCase(getAllAnime.rejected, (state, action) => {
            state.allAnimeLoading = false;
            state.allAnimeError = action.payload;
        });

        // anime details
        builder.addCase(fetchAnimeDetails.pending, (state) => {
            state.animeDetailsLoading = true;
            state.animeDetailsError = null;
        });
        builder.addCase(fetchAnimeDetails.fulfilled, (state, action) => {
            state.animeDetailsLoading = false;
            state.animeDetails = action.payload;
        });
        builder.addCase(fetchAnimeDetails.rejected, (state, action) => {
            state.animeDetailsLoading = false;
            state.animeDetailsError = action.payload;
        });
    },
});

export default animeSlice.reducer;
export const { replaceAnimesWithStaticData } = animeSlice.actions;
