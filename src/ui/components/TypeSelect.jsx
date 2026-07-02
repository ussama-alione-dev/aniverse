import React from "react";
import { TYPES } from "../../constants/types";

const TypeSelect = ({ setType, type }) => {
    return (
        <select
            className="bg-background uppercase border p-3 border-input focus:outline focus:outline-primary"
            value={type}
            onChange={(e) => setType(e.target.value)}
        >
            <option value="" className="text-muted-foreground/70">
                all types
            </option>
            {TYPES.map((genre, ndx) => (
                <option key={ndx} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
    );
};

export default TypeSelect;
