import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime, ndx }) => {
    return (
        <Link
            to={`/anime/${anime.mal_id}`}
            className=" relative text-card-foreground p-4  shadow-md"
        >
            <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="border border-border w-full h-auto "
            />
            <p className="text-primary text-xs font-rajdhani mt-2 ">
                {`[${ndx + 1}]`} {anime.type}
            </p>
            <h3 className="text-sm uppercase  mt-2">{anime.title}</h3>
            <span className="text-muted-foreground font-rajdhani bg-card top-6 p-1 text-xs right-6 absolute">
                {anime.score?.toFixed(2)}
            </span>
        </Link>
    );
};

export default AnimeCard;
