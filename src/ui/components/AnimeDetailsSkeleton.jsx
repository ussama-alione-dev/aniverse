const AnimeDetailsSkeleton = () => {
    return (
        <div className="min-h-screen md:px-40 px-8 mt-24 md:mt-32 animate-pulse">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
                    {/* Left */}
                    <div>
                        {/* Poster */}
                        <div className="aspect-2/3 w-full border border-border bg-muted" />

                        {/* Score */}
                        <div className="mt-4 border border-border p-6">
                            <div className="mx-auto h-3 w-20 bg-muted" />
                            <div className="mx-auto mt-4 h-12 w-24 bg-muted" />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-8">
                        {/* Type / Year / Episodes */}
                        <div>
                            <div className="flex gap-2">
                                <div className="h-3 w-12 bg-muted" />
                                <div className="h-3 w-10 bg-muted" />
                                <div className="h-3 w-14 bg-muted" />
                            </div>

                            {/* Title */}
                            <div className="mt-4 h-14 w-3/4 bg-muted" />
                            <div className="mt-3 h-14 w-1/2 bg-muted" />
                        </div>

                        {/* Genres */}
                        <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-8 w-24 border border-border bg-muted"
                                />
                            ))}
                        </div>

                        {/* Synopsis */}
                        <div className="space-y-3">
                            <div className="h-4 w-full bg-muted" />
                            <div className="h-4 w-full bg-muted" />
                            <div className="h-4 w-5/6 bg-muted" />
                            <div className="h-4 w-4/6 bg-muted" />
                        </div>

                        {/* Stats */}
                        <div className="grid gap-8 pt-8 md:grid-cols-3">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i}>
                                    <div className="h-3 w-16 bg-muted" />
                                    <div className="mt-3 h-5 w-28 bg-muted" />
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <div className="h-11 w-44 border border-border bg-muted" />
                            <div className="h-11 w-40 border border-border bg-muted" />
                            <div className="h-11 w-44 border border-border bg-muted" />
                        </div>

                        {/* Rating */}
                        <div className="border-t border-border pt-8">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="h-3 w-32 bg-muted" />
                                <div className="h-10 w-16 bg-muted" />
                            </div>

                            <div className="h-2 w-full bg-muted" />
                        </div>

                        {/* Notes */}
                        <div className="mb-10">
                            <div className="h-40 w-full border border-border bg-muted" />

                            <div className="mt-4 h-11 w-40 border border-border bg-muted" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetailsSkeleton;
