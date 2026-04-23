import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; PawNest. All rights reserved</p>
      <ul className="footer-icons">
        <li>
          <a className="footer-link">
            <ion-icon className="social-icon" name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a className="footer-link">
            <ion-icon className="social-icon" name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a className="footer-link">
            <ion-icon className="social-icon" name="logo-twitter"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="footer-nav">
        <li>
          <a className="footer-link">Contact Us</a>
        </li>
        <li>
          <a className="footer-link">Help Center</a>
        </li>
        <li>
          <a className="footer-link">Privacy & Terms</a>
        </li>
      </ul>
    </footer>
  );
};
