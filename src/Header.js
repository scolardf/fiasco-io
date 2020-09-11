import React from "react";
import fiascoLogo from "./resource/Fiasco-Logo.png";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <Link to="/" className="imageLink">
        <img src={fiascoLogo} id="logoImage" alt="logo" />
      </Link>
      <ul className="navbarContainer">
        <li className="navLi">
          <NavLink
            to="/projects"
            className="navLink"
            activeClassName="navLinkActive"
          >
            projects
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink
            to="/about"
            className="navLink"
            activeClassName="navLinkActive"
          >
            me
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink
            to="/contact"
            className="navLink"
            activeClassName="navLinkActive"
          >
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
