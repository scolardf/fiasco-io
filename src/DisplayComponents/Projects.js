import React from "react";
import styles from "./projects.module.css";

import ProjectItem from "./ProjectItem";
import fiascoLogo from "../Images/Fiasco-Logo.png";

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
    var sampleItem = {
      key: "initial",
      data: {
        date: "2020-08-31",
        title: "Fiasco-io",
        image: fiascoLogo,
        description:
          `A portfolio site written using ReactJS. 
          You're looking at it right now! 
          Isn't it pretty?`,
        repository: "https://github.com/scolardf/fiasco-io",
        tags: ["Javascript", "React"]
      },
    };
    this.setState({
      projectList: [sampleItem],
    });
    // var projectList = this.state.projectList;

    // var projectListItems = projectList.map((content) => (
    //   <li className="Project-List-Item" key={content.key}>
    //     <ProjectItem data={content.data}/>
    //   </li>
    // ));
    var projectListItems = (
      <li className={styles.projectListItem}>
        <ProjectItem {...sampleItem} />
      </li>
    );
    this.setState({
      projectListItems: <ul className={styles.projectList}>{projectListItems}</ul>,
    });
  }

  render() {
    return (
      <div className={styles.projectListContainer}>
        <div className={styles.projectSidebar}>
          <p>
            This section is unfinished.
            Filters for the projects will be listed here.
          </p>
        </div>
        {this.state.projectListItems}
      </div>
    );
  }
}

export default Projects;
