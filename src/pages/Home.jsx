import React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Button from "../ui/components/Button";
import { fetchTrendingAnime } from "../store/features/animeThunk";
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();

    const { trendingAnime, loading, error } = useSelector(
        (state) => state.anime,
    );

    console.log("trendingAnime", trendingAnime);

    // i need to retrive anime picture , score  , type

    useEffect(() => {
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

            <section className="px-4 md:px-30">
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
                {loading ? (
                    <p>Loading trending anime...</p>
                ) : error ? (
                    <p>Error fetching trending anime</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-6 ">
                        {trendingAnime.map((anime, ndx) => (
                            <div
                                key={anime.mal_id}
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
                                <h3 className="text-sm uppercase  mt-2">
                                    {anime.title}
                                </h3>
                                <span className="text-muted-foreground font-rajdhani bg-card top-6 p-1 text-xs right-6 absolute">
                                    {anime.score?.toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
