import React from "react";

const GenreTag = ({ genre }) => {
    return (
        <span
            key={genre.mal_id}
            className="border border-border font-rajdhani px-4 py-2 text-xs uppercase tracking-widest"
        >
            {genre.name}
        </span>
    );
};

export default GenreTag;
