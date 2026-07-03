import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchFavorites } from "../store/thunks/favoritesThunk";

import FavoriteCard from "../ui/components/FavoriteCard";
import FavoritesSkeleton from "../ui/components/FavoritesSkeleton";
import ErrorMessage from "../ui/components/ErrorMessage";
import EmptyState from "../ui/components/EmptyState";
import { Star } from "lucide-react";

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
            ) : favorites.length === 0 ? (
                <div className="w-full h-96 flex items-center justify-center">
                    <EmptyState
                        icon={<Star />}
                        message="You have no favorites yet.Start exploring and add your favorite anime"
                    />
                </div>
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

            {fetchFavoritesError && (
                <ErrorMessage message={fetchFavoritesError.message} />
            )}
        </div>
    );
};

export default Favorites;
