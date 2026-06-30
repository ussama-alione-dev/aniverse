import React from "react";
import Button from "../ui/components/Button";

const Home = () => {
    return (
        <div className="min-h-screen mt-14 md:mt-20">
            <section className="flex flex-col bg-no-repeat bg-[url('/hero.png')] w-full h-screen items-start justify-center =">
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
        </div>
    );
};

export default Home;
