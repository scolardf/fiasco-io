import React from "react";
import fiascoLogo from "./Images/Fiasco-Logo.png";
import "./Header.css";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("A link was clicked");
  }

  render() {
    return (
      <div id="headerContainer">
        <img src={fiascoLogo} className="Fiasco-Logo" alt="logo" />
        <ul id="navbarContainer">
          <li className="Nav-Div">
            <button onClick={this.handleClick}>Projects</button>
          </li>
          <li className="Nav-Div">
            <button onClick={this.handleClick}>Me</button>
          </li>
          <li className="Nav-Div">
            <button onClick={this.handleClick}>Contact</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default AppHeader;
