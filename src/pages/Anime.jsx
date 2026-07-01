import { useSelector, useDispatch } from "react-redux";
import { getAllAnime } from "../store/features/animeThunk";
import { useEffect } from "react";
import AnimeCard from "../ui/components/AnimeCard";
import ErrorMessage from "../ui/components/ErrorMessage";
import { animes } from "../data/StaticData";
import { replaceAnimesWithStaticData } from "../store/slices/animeSlice";

const Anime = () => {
    const dispatch = useDispatch();
    const { allAnime, allAnimeLoading, allAnimeError } = useSelector(
        (state) => state.anime,
    );

    useEffect(() => {
        dispatch(getAllAnime());
        if (!allAnimeError || allAnimeError.status !== 429) {
            dispatch(replaceAnimesWithStaticData(animes));
        }
    }, []);

    return (
        <div className="min-h-screen md:px-40 px-8 mt-24 md:mt-32 ">
            <h1 className="md:text-6xl text-xl uppercase font-bold mb-4 ">
                anime archive
            </h1>
            <p className="md:text-base text-sm  text-muted-foreground/70">
                Search, filter and dive into the full Jikan catalog.
            </p>

            <div className="mt-4 md:mt-8 w-full flex md:flex-row flex-col items-center gap-2">
                <input
                    type="text"
                    placeholder="search by title ..."
                    className="bg-background border p-3 border-input w-full focus:outline focus:outline-primary placeholder:text-muted-foreground/70 "
                />
                <div className="flex w-full md:flex-row flex-col gap-2">
                    <select className="bg-background uppercase border p-3 border-input focus:outline focus:outline-primary">
                        <option value="" className="text-muted-foreground/70">
                            all types
                        </option>
                    </select>
                    <select className="bg-background uppercase border p-3 border-input focus:outline focus:outline-primary">
                        <option value="" className="text-muted-foreground/70">
                            all genres
                        </option>
                    </select>
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
            </section>
        </div>
    );
};

export default Anime;
