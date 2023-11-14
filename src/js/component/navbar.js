import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/planets">Planets</Link>
      <Link to="/characters">characters</Link>
    </nav>
  );
};
