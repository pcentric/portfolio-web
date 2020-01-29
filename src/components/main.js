import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Skill from "./Skill"

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/Resume" component={Resume} />
    <Route exact path="/Projects" component={Projects} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Skill" component={Skill} />

  </Switch>
);
export default Main;
