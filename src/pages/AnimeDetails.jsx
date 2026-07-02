import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAnimeDetails } from "../store/thunks/animeThunk";
import {
    Star,
    Heart,
    BookOpen,
    Users,
    Dot,
    Plus,
    ArrowRight,
} from "lucide-react";
import GenreTag from "../ui/components/GenreTag";

import Button from "../ui/components/Button";

const AnimeDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [personalScore, setPersonalScore] = useState(0);

    const { animeDetails, animeDetailsLoading, animeDetailsError } =
        useSelector((state) => state.anime);

    useEffect(() => {
        dispatch(fetchAnimeDetails(id));
    }, [dispatch, id]);

    if (animeDetailsLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (animeDetailsError) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                {animeDetailsError.message}
            </div>
        );
    }

    if (!animeDetails) return null;

    const {
        title,
        type,
        year,
        episodes,
        score,
        synopsis,
        genres,
        aired,
        status,
        studios,
        images,
    } = animeDetails;

    return (
        <div className="min-h-screen md:px-40 px-8 mt-24 md:mt-32">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
                    {/* Left */}
                    <div>
                        <img
                            src={images?.webp?.large_image_url}
                            alt={title}
                            className="w-full border border-border object-cover"
                        />

                        <div className="mt-4 border border-border p-6 text-center">
                            <p className="text-xs uppercase tracking-[4px] text-muted-foreground">
                                Score
                            </p>

                            <h2 className="mt-2 text-5xl font-bold text-primary">
                                {score ?? "N/A"}
                            </h2>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center flex-wrap gap-1  text-xs uppercase tracking-[3px] text-primary">
                                <span className="font-rajdhani">[{type}]</span>
                                <Dot size={14} />
                                <span className="font-rajdhani">
                                    {year ??
                                        aired?.prop?.from?.year ??
                                        "Unknown"}
                                </span>
                                <Dot size={14} />

                                <span className="font-rajdhani">
                                    {episodes ?? "?"} EP
                                </span>
                            </div>

                            <h1 className="mt-3 text-5xl font-black uppercase md:text-7xl">
                                {title}
                            </h1>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {genres?.map((genre) => (
                                <GenreTag genre={genre} />
                            ))}
                        </div>

                        {/* Synopsis */}
                        <p className="max-w-4xl leading-8  text-muted-foreground/70 whitespace-pre-line">
                            {synopsis}
                        </p>

                        {/* Stats */}
                        <div className="grid gap-8  pt-8 md:grid-cols-3">
                            <div>
                                <p className="text-xs  uppercase font-rajdhani text-muted-foreground/50">
                                    Aired
                                </p>

                                <h3 className="mt-2 font-semibold">
                                    {aired?.string ?? "Unknown"}
                                </h3>
                            </div>

                            <div>
                                <p className="text-xs  uppercase font-rajdhani text-muted-foreground/50">
                                    Status
                                </p>

                                <h3 className="mt-2 font-semibold">{status}</h3>
                            </div>

                            <div>
                                <p className="text-xs  uppercase font-rajdhani text-muted-foreground/50">
                                    Studio
                                </p>

                                <h3 className="mt-2 font-semibold">
                                    {studios?.length
                                        ? studios
                                              .map((studio) => studio.name)
                                              .join(", ")
                                        : "Unknown"}
                                </h3>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Button
                                variant="ghost"
                                className="flex font-rajdhani items-center gap-2"
                            >
                                <Star size={18} />
                                Add to Favorites
                            </Button>

                            <Button
                                variant="ghost"
                                className="flex items-center font-rajdhani gap-2"
                            >
                                <Plus size={18} />
                                Add to Library
                            </Button>

                            <Button
                                variant="ghost"
                                className="flex items-center font-rajdhani gap-2"
                            >
                                View Characters
                                <ArrowRight size={18} />
                            </Button>
                        </div>

                        {/* Rating */}
                        <div className="border-t border-border pt-8">
                            <div className="mb-6 flex items-center justify-between">
                                <p className="text-xs uppercase tracking-[4px] text-primary">
                                    Personal Rating
                                </p>

                                <div className="flex items-center gap-2 text-primary">
                                    <Star size={26} fill="currentColor" />

                                    <span className="text-5xl font-bold">
                                        {personalScore.toFixed(1)}
                                    </span>
                                </div>
                            </div>

                            <input
                                type="range"
                                min="0"
                                max="10"
                                step="0.1"
                                value={personalScore}
                                onChange={(e) =>
                                    setPersonalScore(Number(e.target.value))
                                }
                                className="w-full accent-red-500"
                            />
                        </div>

                        {/* Notes */}
                        <div className="mb-10">
                            <textarea
                                rows={6}
                                placeholder="Personal note (optional)..."
                                className="w-full resize-none border border-border bg-transparent p-4 outline-none transition focus:border-primary"
                            />

                            <Button
                                variant="secondary"
                                className="font-rajdhani"
                            >
                                Save Rating
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetails;
