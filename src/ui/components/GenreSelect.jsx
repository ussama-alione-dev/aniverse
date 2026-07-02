import React from "react";
import { GENRES } from "../../constants/genres";

const GenreSelect = ({ setGenre, genre }) => {
    return (
        <select
            className="bg-background uppercase border p-3 border-input focus:outline focus:outline-primary"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
        >
            <option value="" className="text-muted-foreground/70">
                all genres
            </option>
            {GENRES.map((genre, ndx) => (
                <option key={ndx} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
    );
};

export default GenreSelect;
