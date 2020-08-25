import React from "react";
import fiascoLogo from "./Images/Fiasco-Logo.png";
import "./Header.css";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    console.log("A link was clicked: " + key);
    this.props.onHeaderClick(key == "imageLink" ? "Home" : key);
  }

  render() {
    return (
      <div id="headerContainer">
        {/* <a id="imageLink" href="#" onClick={e => this.handleClick(e.target.id)}><img src={fiascoLogo} className="Fiasco-Logo" alt="logo" /></a> */}
        <div id="logoContainer">
          <img src={fiascoLogo} id="logoImage" alt="logo" />
          <button
            id="logoButton"
            value="Home"
            onClick={(e) => this.handleClick(e.target.value)}
          ></button>
        </div>
        <ul id="navbarContainer">
          <li className="Nav-Div">
            <button
              value="Projects"
              onClick={(e) => this.handleClick(e.target.value)}
            >
              Projects
            </button>
          </li>
          <li className="Nav-Div">
            <button
              value="About"
              onClick={(e) => this.handleClick(e.target.value)}
            >
              Me
            </button>
          </li>
          <li className="Nav-Div">
            <button
              value="Contact"
              onClick={(e) => this.handleClick(e.target.value)}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default AppHeader;
