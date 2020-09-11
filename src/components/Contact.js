import React from "react";
import styles from "./stylesheets/contact.module.css";
import githubIcon from "../resource/icons/github.svg";
import linkedinIcon from "../resource/icons/linkedin.svg";
import gmailIcon from "../resource/icons/gmail.svg";
import instaIcon from "../resource/icons/instagram.svg";

class Contact extends React.Component {
  contactButton(link, icon, bgColour) {
    return (
      <div className={styles.buttonContainer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className={styles.buttonLink}
        >
          <img className={styles.buttonImg} src={icon} alt={link}></img>
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.socialContainer}>
        <div className={styles.textContainer}>
        <h1>get in touch!</h1>
        <p>looking forward to hearing from you!</p>
        </div>
        <div className={styles.linkContainer}>
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
          {this.contactButton("mailto:scolardf@tcd.ie", gmailIcon, "#D14836")}
          {this.contactButton(
            "https://www.instagram.com/fethingfish/",
            instaIcon,
            "#E4405F"
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
