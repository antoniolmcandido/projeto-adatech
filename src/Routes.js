import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes as RoutesDom,
} from "react-router-dom";
import HomePage from "./pages/home";
// import DetailsPage from "./pages/details";

const Routes = () => (
    <Router>
        <RoutesDom>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/details" element={<DetailsPage />} /> */}
        </RoutesDom>
    </Router>
);

export default Routes;