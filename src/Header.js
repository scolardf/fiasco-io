import React from "react";
import fiascoLogo from "./resource/Fiasco-Logo.png";
import "./Header.css";
import "./HeaderButton";
import HeaderButton from "./HeaderButton";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    console.log("A link was clicked: " + key);
    this.props.navHandler(key);
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
          <HeaderButton
            name="Projects"
            value="Projects"
            clickHandle={this.handleClick}
          ></HeaderButton>
          <HeaderButton
            name="Me"
            value="About"
            clickHandle={this.handleClick}
          ></HeaderButton>
          <HeaderButton
            name="Contact"
            value="Contact"
            clickHandle={this.handleClick}
          ></HeaderButton>
        </ul>
      </div>
    );
  }
}

export default AppHeader;
