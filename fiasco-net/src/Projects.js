import React from "react";

import "./Projects.css"

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.updateProjectList = this.updateProjectList.bind(this);

    this.state = {
      projectList: [
        { key: 1, content: "Test project content" },
        { key: 2, content: "More test content" },
      ],
      projectListItems: "",
    };
  }

  componentDidMount() {
    console.log("Projects Component mounted, calling updateProjectList");
    this.updateProjectList();
  }

  updateProjectList() {
    console.log("updateProjectList has been called");
    console.log("Attempt to create project item list");
    var projectList = this.state.projectList;
    var projectListItems = projectList.map((content) => (
      <li key={content.key}>{content.content}</li>
    ));
    console.log("Item list created, attempt to setState of projectListItems");

    this.setState({ projectListItems: <ul>{projectListItems}</ul> });
    console.log("projectListItems set");
  }

  render() {
    return (
      <div>
        <p>Projects Class</p>
        {console.log("Attempt to render project list items")}
        <ul>{this.state.projectListItems}</ul>
        {console.log("Rendered project list items")}
      </div>
    );
}

export default Projects;
