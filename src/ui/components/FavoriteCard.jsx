import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../../store/thunks/favoritesThunk";

const FavoriteCard = ({ favorite }) => {
    const dispatch = useDispatch();

    const handleRemoveFromFavorites = () => {
        dispatch(removeFromFavorite(favorite.id));
    };

    return (
        <div key={favorite.id} className="flex h-full flex-col">
            <div className="aspect-2/3 overflow-hidden border border-border">
                <img
                    src={favorite.image}
                    alt={favorite.title}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="mt-3 flex flex-1 flex-col">
                <p className="line-clamp-2 text-sm font-medium text-muted-foreground/70">
                    {favorite.title}
                </p>

                <Button
                    onClick={handleRemoveFromFavorites}
                    variant="ghost"
                    className="mt-auto w-full text-xs"
                >
                    Remove from Favorites
                </Button>
            </div>
        </div>
    );
};

export default FavoriteCard;
