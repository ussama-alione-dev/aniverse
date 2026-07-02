import { useSelector, useDispatch } from "react-redux";
import { getAllAnime } from "../store/thunks/animeThunk";
import { useEffect } from "react";
import AnimeCard from "../ui/components/AnimeCard";
import ErrorMessage from "../ui/components/ErrorMessage";
import { animes } from "../data/StaticData";
import { replaceAnimesWithStaticData } from "../store/slices/animeSlice";
import SearchAnimeInput from "../ui/components/SearchAnimeInput";
import { useState } from "react";
import EmptyState from "../ui/components/EmptyState";
import { Search } from "lucide-react";
import GenreSelect from "../ui/components/GenreSelect";
import TypeSelect from "../ui/components/TypeSelect";

const Anime = () => {
    const dispatch = useDispatch();

    const [genre, setGenre] = useState("");
    const [type, setType] = useState("");
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    const { allAnime, allAnimeLoading, allAnimeError } = useSelector(
        (state) => state.anime,
    );

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);

    useEffect(() => {
        dispatch(getAllAnime({ query, genre, type }));
        if (!allAnimeError || allAnimeError.status !== 429) {
            dispatch(replaceAnimesWithStaticData(animes));
        }
    }, [debouncedQuery, genre, type]);

    return (
        <div className="min-h-screen md:px-40 px-8 mt-24 md:mt-32 ">
            <h1 className="md:text-6xl text-xl uppercase font-bold mb-4 ">
                anime archive
            </h1>
            <p className="md:text-base text-sm  text-muted-foreground/70">
                Search, filter and dive into the full Jikan catalog.
            </p>

            <div className="mt-4 md:mt-8 w-full flex md:flex-row flex-col items-center gap-2">
                <SearchAnimeInput query={query} setQuery={setQuery} />
                <div className="flex w-full md:flex-row flex-col gap-2">
                    <TypeSelect type={type} setType={setType} />
                    <GenreSelect genre={genre} setGenre={setGenre} />
                </div>
            </div>

            <section>
                {allAnimeLoading ? (
                    <div className="w-full h-96 flex items-center justify-center">
                        <p className="text-muted-foreground/70">Loading...</p>
                    </div>
                ) : allAnimeError ? (
                    <ErrorMessage message={allAnimeError.message} />
                ) : (
                    <div className="grid mt-6 md:mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {allAnime.map((anime, ndx) => (
                            <AnimeCard
                                ndx={ndx}
                                key={anime.mal_id}
                                anime={anime}
                                episodes={true}
                                year={true}
                            />
                        ))}
                    </div>
                )}

                {!allAnimeLoading && allAnime.length === 0 && (
                    <EmptyState
                        icon={
                            <Search className="w-12 h-12 stroke-foreground" />
                        }
                        message="No anime found."
                    />
                )}
            </section>
        </div>
    );
};

export default Anime;
