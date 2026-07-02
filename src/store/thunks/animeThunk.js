import { createAsyncThunk } from "@reduxjs/toolkit";
import { jikanApi, localApi } from "../../api/axios";

export const getAllAnime = createAsyncThunk(
    "anime/getAllAnime",
    async ({ query, genre, type }, thunkAPI) => {
        try {
            const response = await jikanApi.get(
                `/anime?q=${query}&genre=${genre}&type=${type}`,
            );
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message,
            );
        }
    },
);

export const fetchTrendingAnime = createAsyncThunk(
    "anime/fetchTrendingAnime",
    async (_, thunkAPI) => {
        try {
            const response = await jikanApi.get("/top/anime");

            return response.data.data.slice(0, 6);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message,
            );
        }
    },
);

export const fetchSeasonalAnime = createAsyncThunk(
    "anime/fetchSeasonalAnime",
    async (_, thunkAPI) => {
        try {
            const response = await jikanApi.get("/seasons/now");

            return response.data.data.slice(0, 6);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message,
            );
        }
    },
);

export const fetchAnimeDetails = createAsyncThunk(
    "anime/fetchAnimeDetails",
    async (animeId, thunkAPI) => {
        try {
            const response = await jikanApi.get(`/anime/${animeId}`);

            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message,
            );
        }
    },
);
