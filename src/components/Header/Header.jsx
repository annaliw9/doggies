import React from "react";
import logo from "../../assets/transparent-logo.svg";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" width={65}></img>
      </Link>
      <NavBar />
    </header>
  );
};
