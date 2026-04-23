import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="main-navbar">
      <ul className="main-nav-links">
        <li>
          <a className="main-nav-link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="favorites">
            Favorites
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
