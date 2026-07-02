import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchFavorites } from "../store/thunks/favoritesThunk";

import FavoriteCard from "../ui/components/FavoriteCard";
import FavoritesSkeleton from "../ui/components/FavoritesSkeleton";

const Favorites = () => {
    const { favorites, fetchFavoritesLoading, fetchFavoritesError } =
        useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFavorites());
    }, []);

    return (
        <div className="min-h-screen md:px-40 px-8 mt-24 md:mt-32 ">
            <h1 className="md:text-6xl text-xl uppercase font-bold mb-4">
                favorites
            </h1>
            <p className="md:text-base text-sm  text-muted-foreground/70">
                Your starred anime, always within reach.
            </p>

            {fetchFavoritesLoading ? (
                <FavoritesSkeleton count={12} />
            ) : (
                <div className="mt-4 md:mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                    {favorites.map((favorite) => (
                        <FavoriteCard
                            key={favorite.animeId}
                            favorite={favorite}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
