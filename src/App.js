import React from "react";
import "./App.css";
import FHeader from "./Header";
import FContent from "./ContentDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangePage = this.handleChangePage.bind(this);

    this.state = {
      contentToDisplay: "Home",
    };
  }

  handleChangePage(pagename) {
    this.setState({ contentToDisplay: pagename });
  }


  render() {
    const contentToDisplay = this.state.contentToDisplay;

    return (
      <div className="App">
        <FHeader navHandler={this.handleChangePage} />
        <FContent contentToDisplay={contentToDisplay} navHandler={this.handleChangePage}/>
      </div>
    );
  }
}

export default App;
