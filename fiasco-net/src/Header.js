import React from "react";
import fiascoLogo from "./Images/Fiasco-Logo.png";
import "./Header.css";

function AppHeader() {
  return (
    <div id="headerContainer">
      <img src={fiascoLogo} className="Fiasco-Logo" alt="logo" />
      <ul id="navbarContainer">
        <li className="Nav-Div"><a href="">Projects</a></li>
        <li className="Nav-Div"><a href="">Me</a></li>
        <li className="Nav-Div"><a href="">Contact</a></li>
      </ul>
    </div>
  );
}

export default AppHeader;
