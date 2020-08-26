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
        { key: 3, content: "3" },
        { key: 4, content: "4" },
        { key: 5, content: "5" },
        { key: 6, content: "6" },
        { key: 7, content: "7" },
      ],
      projectListItems: "",
    };
  }

  componentDidMount() {
    console.log("Projects Component mounted, calling updateProjectList");
    this.updateProjectList();
  }

  updateProjectList() {
    var projectList = this.state.projectList;
    var projectListItems = projectList.map((content) => (
      <li className="Project-List-Item" key={content.key}>{content.content}</li>
    ));
    this.setState({ projectListItems: <ul id="projectList">{projectListItems}</ul> });
  }

  render() {
    return (
      <div id="projectListContainer">
        <div id="projectSidebar"><p>{"Projects Class \n Sidebar Space"}</p></div>
        {this.state.projectListItems}
      </div>
    );
  }
}

export default Projects;
