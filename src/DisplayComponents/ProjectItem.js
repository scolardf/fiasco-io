import React from "react";
import "./ProjectItem.css"

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
    
        console.log("Constructor: " + this.props)
    }

  render() {
    console.log("ProjectItem function called");
    const projectData = this.props.data;
    console.log("data.date: " + projectData.date)
    console.log("data.title: " + projectData.title)
    console.log("data.image: " + projectData.image)
    console.log("data.description: " + projectData.description)
    console.log("data.repository: " + projectData.repository)
    return (
      <div id="projectItemContainer">
        <div id="projectTitleLine">
          <p id="date">{projectData.date}</p>
          <p id="titleP">{projectData.title}</p>
        </div>
        <div id="imageContainer"><img src={projectData.image} alt="This is a webpage"></img></div>
        <div id="descriptionAndRepo">
          <p id="descriptionP">{projectData.description}</p>
          <p id="repoP">
            Repo: <a href={projectData.repository}>{projectData.repository}</a>
          </p>
          {projectData.additionals && <p>this is an additional p block</p>}
        </div>
      </div>
    );
  }
}

export default ProjectItem;
