import React from "react";
import clsx from "clsx";

const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {
    const variants = {
        primary: "bg-primary text-foreground hover:opacity-90",

        secondary:
            "bg-foreground text-background border border-border hover:bg-primary hover:text-white",

        ghost: "border border-border text-foreground bg-transparent hover:bg-muted",
    };

    return (
        <button
            className={clsx(
                "inline-flex uppercase cursor-pointer items-center justify-center  px-6 py-3 font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
