import React from "react";

import Home from "./DisplayComponents/Home";
import Projects from "./DisplayComponents/Projects";
import About from "./DisplayComponents/About";
import Contact from "./DisplayComponents/Contact";

class ContentDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      internalPages: [
        { id: "Home", content: <Home navHandler={props.navHandler}/> },
        { id: "Projects", content: <Projects /> },
        { id: "About", content: <About /> },
        { id: "Contact", content: <Contact /> },
      ]
    };
  }

  render() {
    const contentKey = this.props.contentToDisplay;
    const contentList = this.state.internalPages;
    const displayPage = contentList.find((item) => item.id === contentKey);
    return (
      <div className="contentDiv">
        {/* <p>Text from App.js: {contentKey}</p> */}
        {displayPage.content}
      </div>
    );
  }
}

export default ContentDisplay;
