import React from "react";
import Button from "./Button";

const FavoriteCard = ({ favorite }) => {
    return (
        <div key={favorite.animeId} className="flex h-full flex-col">
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

                <Button variant="ghost" className="mt-auto w-full text-xs">
                    Remove from Favorites
                </Button>
            </div>
        </div>
    );
};

export default FavoriteCard;
