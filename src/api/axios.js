import axios from "axios";

export const jikanApi = axios.create({
    baseURL: "https://api.jikan.moe/v4",
    headers: {
        "Content-Type": "application/json",
    },
});

export const localApi = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
    },
});
