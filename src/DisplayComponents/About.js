import React from "react";


import aboutColour from "../Images/Fiach1.jpg";
import aboutBW from "../Images/Fiach1-B&W.jpg";
import styles from "./about.module.css";

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
        </div>
      </div>
    );
  }
}

export default About;
