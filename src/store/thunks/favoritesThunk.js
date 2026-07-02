import { createAsyncThunk } from "@reduxjs/toolkit";
import { localApi } from "../../api/axios";

export const addToFavorite = createAsyncThunk(
    "favorites/add",
    async (anime, { rejectWithValue }) => {
        try {
            // Check if already exists
            const { data: existing } = await localApi.get(
                `/favorites?animeId=${anime.mal_id}`,
            );

            if (existing.length > 0) {
                return rejectWithValue("Already in favorites");
            }

            const favorite = {
                animeId: anime.mal_id,
                title: anime.title,
                image: anime.images.webp.large_image_url,
                score: anime.score,
                type: anime.type,
                episodes: anime.episodes,
            };

            const response = await localApi.post("/favorites", favorite);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const removeFromFavorite = createAsyncThunk(
    "favorites/remove",
    async (animeId, { rejectWithValue }) => {
        try {
            await localApi.delete(`/favorites/${animeId}`);
            return animeId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const fetchFavorites = createAsyncThunk(
    "favorites/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const response = await localApi.get("/favorites");
            console.log(response.data, "response.data");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
