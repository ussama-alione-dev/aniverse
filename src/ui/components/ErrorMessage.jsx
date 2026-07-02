import { BadgeAlert } from "lucide-react";
import React from "react";

const ErrorMessage = ({ message }) => {
    return (
        <div className="w-fit h-96 flex items-center justify-center">
            <p className="flex md:flex-row flex-col   items-start gap-4 text-muted-foreground/70 bg-card px-4 md:p-10 py-4  border ">
                <BadgeAlert className="stroke-destructive" />
                <div>
                    <p className="text-destructive">{message}</p>
                    <p className="text-sm text-muted-foreground/70">
                        please wait a few minutes and try again
                    </p>
                </div>
            </p>
        </div>
    );
};

export default ErrorMessage;
