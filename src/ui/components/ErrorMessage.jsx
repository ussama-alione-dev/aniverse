import { BadgeAlert } from "lucide-react";
import React from "react";

const ErrorMessage = ({ message }) => {
    return (
        <div className="w-fit h-96 flex items-center justify-center">
            <p className="flex md:flex-row flex-col md:items-center  items-start gap-2 text-muted-foreground/70 bg-primary/10 px-4 md:p-10 py-4  border border-primary ">
                <BadgeAlert className="stroke-primary" />
                {message}
            </p>
        </div>
    );
};

export default ErrorMessage;
