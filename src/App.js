import React from "react";
import "./App.css";
import Header from "./Header";

import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <Router>
          <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects" component={Projects}>
              <Projects />
            </Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </div>
        </Router>
    );
  }
}

export default App;
