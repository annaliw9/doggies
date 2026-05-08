import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-navbar">
      <ul className="main-nav-links">
        <li>
          <Link className="main-nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="main-nav-link" to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
