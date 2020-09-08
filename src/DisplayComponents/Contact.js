import React from "react";
import styles from "./stylesheets/contact.module.css";
import githubIcon from "../resource/icons/github.svg";
import linkedinIcon from "../resource/icons/linkedin.svg";

class Contact extends React.Component {
  contactButton(link, icon, bgColour) {
    return (
      <div className={styles.buttonContainer}>
        <a target="_blank" rel="noopener noreferrer" href={link} className={styles.buttonLink} style={{ backgroundColor: bgColour }}>
          <img className={styles.buttonImg} src={icon} alt={link}></img>
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.socialContainer}>
        {/* <SocialIcon url="https://github.com/scolardf/" style={{ height: 200, width: 200 }}/>
                <SocialIcon url="https://www.linkedin.com/in/fiach-scolard-98350213a/"/> */}
        {this.contactButton(
          "https://github.com/scolardf/",
          githubIcon,
          "white"
        )}
        {this.contactButton(
          "https://www.linkedin.com/in/fiach-scolard-98350213a/",
          linkedinIcon,
          "#0077B5"
        )}
      </div>
    );
  }
}

export default Contact;
