import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar text-light mb-3 d-flex justify-content-center ">
      <ul>
        <Link to="/personajes">Personajes</Link>
        <Link to="">Naves</Link>
        <Link to="">Planetas</Link>
      </ul>
    </nav>
  );
};
