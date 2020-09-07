import React from "react";
import styles from "./projectItem.module.css";
import githubLogo from "../Images/GitHub_Logo_White.png";

class ProjectItem extends React.Component {
  tagList(tagList) {
    return (
      <ul className={styles.tagList}>
        {tagList.map((tag) => (
          <li key={tag} className={styles.tagListItem}>
            <p>{tag.toString()}</p>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const projectData = this.props.data;
    return (
      <div className={styles.projectItemContainer}>
        <div className={styles.dateBox}>
          <p className={styles.dateP}>{projectData.date}</p>
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.titleH1}>{projectData.title}</h1>
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
          <a className={styles.repoLink} href={projectData.repository}>
            <img src={githubLogo} alt="Repo" />
          </a>
        </div>
        {this.tagList(projectData.tags)}
      </div>
    );
  }
}

export default ProjectItem;
