import React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Button from "../ui/components/Button";
import {
    fetchTrendingAnime,
    fetchSeasonalAnime,
} from "../store/thunks/animeThunk";
import { Link } from "react-router-dom";

import AnimeCard from "../ui/components/AnimeCard";
import ErrorMessage from "../ui/components/ErrorMessage";
import AnimeGridSkeleton from "../ui/components/AnimeGridSkeleton";

const Home = () => {
    const dispatch = useDispatch();

    const {
        trendingAnime,
        seasonalAnime,
        TopAnimeLoading,
        SeasonalAnimeLoading,
        TopAnimeError,
        SeasonalAnimeError,
    } = useSelector((state) => state.anime);

    useEffect(() => {
        dispatch(fetchSeasonalAnime());
        dispatch(fetchTrendingAnime());
    }, []);

    return (
        <div className="min-h-screen mt-14 md:mt-20">
            <section className="flex p-4 flex-col bg-no-repeat bg-[url('/hero.png')] w-full h-screen items-start justify-center =">
                <h1 className="md:text-8xl text-4xl font-bold uppercase text-foreground ">
                    Your personal <br />{" "}
                    <span className="text-primary"> anime </span>
                    universe
                </h1>
                <p className="text-lg text-muted-foreground/70  mt-4">
                    Browse thousands of titles, dive into characters, score what
                    you <br /> love and curate a watch list that follows you
                    across devices
                </p>
                <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-4 mt-6">
                    <Button variant="secondary">explore anime</Button>
                    <Button variant="ghost"> + open library</Button>
                </div>
            </section>

            <section className="px-4 py-10 md:px-30">
                <div className="flex justify-between items-center mb-4 mt-8">
                    <h1 className="md:text-4xl text-xl uppercase font-bold mb-4">
                        trending frequency
                    </h1>
                    <Link
                        className="text-foreground/70 uppercase hover:text-primary text-xs md:text-sm font-rajdhani"
                        to="/anime"
                    >
                        view full index →
                    </Link>
                </div>
                {TopAnimeLoading ? (
                    <AnimeGridSkeleton count={6} />
                ) : TopAnimeError ? (
                    <ErrorMessage
                        message={
                            TopAnimeError.message ||
                            "An error occurred while fetching trending anime."
                        }
                    />
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-6 ">
                        {trendingAnime.map((anime, ndx) => (
                            <AnimeCard
                                key={anime.mal_id}
                                anime={anime}
                                ndx={ndx}
                            />
                        ))}
                    </div>
                )}
            </section>
            <section className="px-4 py-10 border-t border-border md:px-30 bg-card">
                <div className="flex justify-between items-center mb-4 mt-8">
                    <h1 className="md:text-4xl text-xl uppercase font-bold mb-4">
                        seasonal anime
                    </h1>

                    <span className="text-foreground/70 uppercase hover:text-primary text-xs md:text-sm font-rajdhani">
                        this season
                    </span>
                </div>
                {SeasonalAnimeLoading ? (
                    <AnimeGridSkeleton count={6} />
                ) : SeasonalAnimeError ? (
                    <ErrorMessage
                        message={
                            SeasonalAnimeError.message ||
                            "An error occurred while fetching seasonal anime."
                        }
                    />
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-6 ">
                        {seasonalAnime.map((anime, ndx) => (
                            <AnimeCard
                                key={anime.mal_id}
                                anime={anime}
                                ndx={ndx}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
