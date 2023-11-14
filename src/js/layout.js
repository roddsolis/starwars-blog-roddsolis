import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/home.css";

import Home from "./views/Home.jsx";
import PeopleDetails from "./views/PersonDetails.jsx";
import PlanetDetails from "./views/PlanetDetails.jsx";
import VehicleDetails from "./views/VehiclesDetails.jsx";
import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/people-details" element={<PeopleDetails />} />
            <Route path="/planet-details" element={<PlanetDetails />} />
            <Route path="/starships-details" element={<VehicleDetails />} />

            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
