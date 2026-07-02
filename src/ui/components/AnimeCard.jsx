import { Dot } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime, ndx, episodes, year }) => {
    return (
        <Link
            to={`/anime/${anime.mal_id}`}
            className="relative text-card-foreground p-4 shadow-md"
        >
            <div className="w-full aspect-[2/3] overflow-hidden border border-border">
                <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-primary text-xs font-rajdhani mt-2 ">
                {`[${ndx + 1}]`} {anime.type}
            </p>
            <h3 className="text-sm uppercase mt-2">{anime.title}</h3>
            <span className="text-muted-foreground font-rajdhani bg-card top-6 p-1 text-xs right-6 absolute">
                {anime.score?.toFixed(2)}
            </span>

            <div className="flex items-center mt-2">
                {episodes && (
                    <>
                        <span className="text-muted-foreground/50 uppercase font-rajdhani p-1 text-xs right-20 ">
                            {anime.episodes} EP
                        </span>
                        <Dot size={10} />
                    </>
                )}
                {year && (
                    <span className="text-muted-foreground/50 uppercase font-rajdhani p-1 text-xs right-20 ">
                        {anime.year}
                    </span>
                )}
            </div>
        </Link>
    );
};

export default AnimeCard;
