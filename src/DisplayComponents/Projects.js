import React from "react";

import "./Projects.css";
import "./ProjectItem";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.updateTestProjectList = this.updateTestProjectList.bind(this);

    this.state = {
      projectList: [{ key: 1 }], //Initialise sample projectList for use later, may not be used
      projectListItems: "",

      testProjectList: [
        { key: 1, content: "Test project content" },
        { key: 2, content: "More test content" },
        { key: 3, content: "3" },
        { key: 4, content: "4" },
        { key: 5, content: "5" },
        { key: 6, content: "6" },
        { key: 7, content: "7" },
      ],
      testProjectListItems: "",
    };
  }

  componentDidMount() {
    console.log("Projects Component mounted, calling updateTestProjectList");
    this.updateTestProjectList();
  }

  updateProjectList() {
    //For now, will use sample projectList. In final, will request up to date list from db here
    var projectList = this.state.projectList;
    var projectListItems = projectList.map((content) => (
      <li className="Project-List-Item" key={content.key}>
        {content.content}
      </li>
    ));
    this.setState({
      projectListItems: <ul id="projectList">{projectListItems}</ul>,
    });
  }

  //Testing
  updateTestProjectList() {
    var projectList = this.state.testProjectList;
    var projectListItems = projectList.map((content) => (
      <li className="Test-Project-List-Item" key={content.key}>
        {content.content}
      </li>
    ));
    this.setState({
      testProjectListItems: <ul id="testProjectList">{projectListItems}</ul>,
    });
  }

  render() {
    return (
      <div id="projectListContainer">
        <div id="projectSidebar">
          <p>{"Projects Class \n Sidebar Space"}</p>
        </div>
        {this.state.testProjectListItems}
      </div>
    );
  }
}

export default Projects;
