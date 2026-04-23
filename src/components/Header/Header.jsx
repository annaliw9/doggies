import React from "react";
import logo from "../../assets/transparent-logo.svg";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo" width={65}></img>
      </a>
      <NavBar />
    </header>
  );
};
