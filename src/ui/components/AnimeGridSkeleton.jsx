import React from "react";

const AnimeGridSkeleton = ({ count = 10 }) => {
    return (
        <div className="grid mt-6 md:mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="border border-border bg-card overflow-hidden animate-pulse"
                >
                    <div className="aspect-2/3 bg-muted" />

                    <div className="p-4 space-y-3">
                        <div className="h-5 w-3/4 bg-muted " />

                        <div className="h-4 w-10 bg-muted " />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnimeGridSkeleton;
