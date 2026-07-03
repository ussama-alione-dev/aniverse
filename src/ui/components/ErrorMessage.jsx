import { BadgeAlert, RotateCw } from "lucide-react";
import React from "react";
import Button from "./Button";

const ErrorMessage = ({ message }) => {
    return (
        <div className="w-fit h-96 flex items-center justify-center">
            <div className="flex md:flex-row flex-col   items-start gap-4 text-muted-foreground/70 bg-card px-4 md:p-10 py-4  border ">
                <BadgeAlert className="stroke-destructive" />
                <div>
                    <p className="text-destructive">{message}</p>
                    <p className="text-sm text-muted-foreground/70">
                        please wait a few minutes and try again
                    </p>

                    <Button
                        onClick={() => window.location.reload()}
                        variant="secondary"
                        className="mt-4 flex items-center gap-2"
                    >
                        try again <RotateCw size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;
