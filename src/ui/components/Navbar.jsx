import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Hamburger, Menu, X } from "lucide-react";

const NAVLINKS = [
    { to: "/anime", label: "Anime" },
    { to: "/characters", label: "Characters" },
    { to: "/favourites", label: "Favourites" },
    { to: "/my-ratings", label: "My Ratings" },
    { to: "/my-library", label: "My Library" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-background border-b border-border">
            <div
                className={`flex items-center h-full px-4 max-w-7xl ${isOpen ? "justify-between" : "justify-start"}`}
            >
                {" "}
                <Link
                    to="/"
                    className="font-rajdhani text-2xl font-bold text-primary tracking-widest mr-20"
                >
                    ANIVERSE
                </Link>
                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAVLINKS.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className="px-4 py-2 font-rajdhani text-sm transition-colors rounded-md"
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
                {/* Mobile burger */}
                <button
                    className="md:hidden ml-auto p-2 text-foreground/70 hover:text-foreground transition-colors"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X size={22} className="text-primary" />
                    ) : (
                        <Hamburger size={22} className="text-primary" />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <nav className="md:hidden bg-background border-t border-border px-4 pb-4 flex flex-col gap-1">
                    {NAVLINKS.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 font-rajdhani text-sm transition-colors rounded-md"
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
