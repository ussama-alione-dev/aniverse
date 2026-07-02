import { useState } from "react";

const SearchAnimeInput = ({ query, setQuery }) => {
    return (
        <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="search by title ..."
            className="bg-background border p-3 border-input w-full focus:outline focus:outline-primary placeholder:text-muted-foreground/70 "
        />
    );
};

export default SearchAnimeInput;
