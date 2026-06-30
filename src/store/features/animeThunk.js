import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

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
