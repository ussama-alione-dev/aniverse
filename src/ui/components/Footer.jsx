const Footer = () => {
    return (
        <footer className="border-t flex items-center justify-between p-4 border-border bg-background">
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
        </footer>
    );
};

export default Footer;
