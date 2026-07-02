import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";

import { addToFavorite } from "../../store/thunks/favoritesThunk";
import { Star } from "lucide-react";

const AddToFavorites = ({ anime }) => {
    const dispatch = useDispatch();

    const { favorites, AddToFavoritesloading, AddToFavoriteserror } =
        useSelector((state) => state.favorites);

    const handleAddToFavorites = () => {
        try {
            dispatch(addToFavorite(anime));
        } catch (error) {
            console.error("Error adding anime to favorites:", error);
        }
    };

    console.log("Favorites:", favorites);

    return (
        <Button
            variant="ghost"
            className="flex font-rajdhani items-center gap-2"
            onClick={handleAddToFavorites}
        >
            <Star size={18} />
            Add to Favorites
        </Button>
    );
};

export default AddToFavorites;
