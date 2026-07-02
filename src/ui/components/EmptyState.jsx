import React from "react";

const EmptyState = ({ icon, message }) => {
    return (
        <div className="flex flex-col items-center border border-border bg-card justify-center p-8">
            <div className="text-4xl mb-4">{icon}</div>
            <p className="text-muted-foreground/50">{message}</p>
        </div>
    );
};

export default EmptyState;
