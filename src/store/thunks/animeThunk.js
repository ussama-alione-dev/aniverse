import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const getAllAnime = createAsyncThunk(
    "anime/getAllAnime",
    async (q, thunkAPI) => {
        try {
            const response = await api.get(`/anime?q=${q}`);
            console.log("All Anime Response:", response.data.data); // Log the response data for debugging
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
            const response = await api.get("/top/anime");

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
            const response = await api.get("/seasons/now");

            return response.data.data.slice(0, 6);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message,
            );
        }
    },
);
