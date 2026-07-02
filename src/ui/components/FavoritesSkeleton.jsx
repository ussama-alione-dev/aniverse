const FavoritesSkeleton = ({ count = 12 }) => {
    return (
        <div className="mt-4 md:mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="flex h-full flex-col animate-pulse">
                    <div className="aspect-2/3 overflow-hidden border border-border bg-muted" />

                    <div className="mt-3 flex flex-1 flex-col">
                        <div className="space-y-2">
                            <div className="h-4 w-3/4  bg-muted" />
                            <div className="h-4 w-1/2  bg-muted" />
                        </div>

                        <div className="mt-auto h-10 w-full  bg-muted" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FavoritesSkeleton;
