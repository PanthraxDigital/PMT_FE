import React from "react";
import { Switch, Route } from "react-router-dom";
import Body from "../components/body";
import Aboutus from "../components/aboutus";
import Contactus from "../components/contactus";
import Projects from "../components/projects";
import Services from "../components/services";

class MainRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/contactus" component={Contactus} />
        <Route path="/projects" component={Projects} />
        <Route path="/services" component={Services} />
        <Route path="/" component={Body} />
      </Switch>
    );
  }
}

export default MainRoute;