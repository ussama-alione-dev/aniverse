const Footer = () => {
    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h2 className="font-rajdhani text-xl font-bold text-primary tracking-widest">
                        ANIVERSE
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Your personal anime universe.
                    </p>
                </div>

                <div className="text-sm text-muted-foreground text-center md:text-right">
                    © 2026 AniVerse. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
