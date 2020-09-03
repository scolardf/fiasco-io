import React from "react";
import styles from "./projectItem.module.css";

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor: " + this.props);
  }

  render() {
    const projectData = this.props.data;
    return (
      <div className={styles.projectItemContainer}>
        <div className={styles.dateBox}>
          <p className={styles.dateP}>{projectData.date}</p>
        </div>
        <div className={styles.titleBox}>
          <p className={styles.titleP}>{projectData.title}</p>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.imageInner}
            src={projectData.image}
            alt="This is a webpage"
          ></img>
        </div>
        <p className={styles.descriptionP}>{projectData.description}</p>
        <div className={styles.additionalsDiv}>
          <p className={styles.repoP}>
            Repo: <a href={projectData.repository}>{projectData.repository}</a>
          </p>
          {projectData.additionals && <p>this is an additional p block</p>}
        </div>
      </div>
    );
  }
}

export default ProjectItem;
