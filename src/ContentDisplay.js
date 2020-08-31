import React from "react";

import Home from "./DisplayComponents/Home";
import Projects from "./DisplayComponents/Projects";

class ContentDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      internalPages: [
        { id: "Home", content: <Home /> },
        { id: "Projects", content: <Projects /> },
        { id: "About", content: <p>About Text</p> },
        { id: "Contact", content: <p>Contact Text</p> },
      ],
      pageDisplayed: <Home />,
    };
  }

  render() {
    const contentKey = this.props.contentToDisplay;
    const contentList = this.state.internalPages;
    const displayPage = contentList.find((item) => item.id === contentKey);
    return (
      <div className="Content-Div">
        <p>Text from App.js: {contentKey}</p>
        {displayPage.content}
        {/* <p>{this.state.internalPages[this.state.pageToDisplay].content}</p> */}
      </div>
    );
  }
}

export default ContentDisplay;
