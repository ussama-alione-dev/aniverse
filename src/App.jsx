import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Home Page</div>} />

                <Route path="/anime" element={<div>anime page</div>} />
                <Route
                    path="/anime/:id"
                    element={<div>anime detail page</div>}
                />
                <Route
                    path="/anime/:id/characters"
                    element={<div>anime characters page</div>}
                />

                <Route path="/characters" element={<div>character page</div>} />
                <Route
                    path="/characters/:id"
                    element={<div>character detail page</div>}
                />

                <Route
                    path="/favourites"
                    element={<div> favourites page</div>}
                />
                <Route
                    path="/my-ratings"
                    element={<div> my ratings page</div>}
                />

                <Route
                    path="/my-library"
                    element={<div> my library page</div>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
