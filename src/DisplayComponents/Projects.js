import React from "react";

import "./Projects.css";
import ProjectItem from "./ProjectItem";
import fiascoSample from "../Images/Fiasco-Io-Example.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.updateProjectList = this.updateProjectList.bind(this);
    this.state = {
      projectList: [], //Initialise sample projectList for use later, may not be used
      projectListItems: "",
    };
  }

  componentDidMount() {
    console.log("Projects Component mounted, calling updateTestProjectList");

    this.updateProjectList();
  }

  updateProjectList() {
    //For now, will use sample projectList. In final, will request up to date list from db here
    console.log("UpdateProjectList called");
    var sampleItem = {
      key: "initial",
      data: {
        date: "2020-08-31",
        title: "Fiasco-io",
        image: fiascoSample,
        description:
          `A portfolio site written using React Native. 
          You're looking at it right now! 
          Isn't it pretty?`,
        repository: "https://github.com/scolardf/fiasco-io",
        // additionals: [
        //   {siteURL: "https://scolardf.github.io/fiasco-io/"},
        //   {tags: ["Javascript", "React"]},
        // ]
      },
    };
    console.log(sampleItem);
    this.setState({
      projectList: [sampleItem],
    });
    console.log("projectList state set. attempting build of ProjectItem array");
    // var projectList = this.state.projectList;

    // var projectListItems = projectList.map((content) => (
    //   <li className="Project-List-Item" key={content.key}>
    //     <ProjectItem data={content.data}/>
    //   </li>
    // ));
    var projectListItems = (
      <li className="Project-List-Item">
        <ProjectItem {...sampleItem} />
      </li>
    );
    this.setState({
      projectListItems: <ul id="projectList">{projectListItems}</ul>,
    });
  }

  render() {
    return (
      <div id="projectListContainer">
        <div id="projectSidebar">
          <p>{"Projects Class \n Sidebar Space"}</p>
        </div>
        {this.state.projectListItems}
      </div>
    );
  }
}

export default Projects;
