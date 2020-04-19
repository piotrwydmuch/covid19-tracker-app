import React, { Component } from "react";
import { Footer, Nav } from "./components";
import CoronaTracker from "./CoronaTracker";

import About from "./About";
import AboutCovid from "./AboutCovid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/o-stronie" component={About} />
            <Route path="/o-wirusie" component={AboutCovid} />
            <Route path="/" exact component={CoronaTracker} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
