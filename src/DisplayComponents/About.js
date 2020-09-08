import React from "react";


import aboutColour from "../resource/Fiach1.jpg";
import aboutBW from "../resource/Fiach1-B&W.jpg";
import styles from "./stylesheets/about.module.css";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSrc: aboutBW,
    };
  }

  render() {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.imageBW}
            src={this.state.imageSrc}
            onMouseOut={() => {
                this.setState( {
                    imageSrc : aboutBW,
                })
            }}
            onMouseOver={() => {
                this.setState( {
                    imageSrc : aboutColour,
                })
            }}
            alt="pic of me"
          ></img>
        </div>
        <div className={styles.textContainer}>
            <h1>hey, this section is about me!</h1>
            <p>i'm gonna fill it in properly at some point i promise</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
    );
  }
}

export default About;
