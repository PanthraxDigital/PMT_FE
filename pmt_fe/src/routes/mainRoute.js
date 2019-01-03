import React from "react";
import { Switch, Route } from "react-router-dom";
import Body from "../components/body";
import Aboutus from "../components/aboutus";
import Contactus from "../components/contactus";
import Projects from "../components/projects";
import Services from "../components/services";
import Machines from "../components/machine";

class MainRoute extends React.Component {
  constructor(props) {
    super(props);
    this.menuSelected = this.menuSelected.bind(this);
  }

  menuSelected(menuId) {
    this.props.menuSelectedHighLightFn(1);
  }

  render() {
    return (
      <Switch>
        <Route
          path="/aboutus"
          render={() => <Aboutus menuSelected={this.menuSelected} />}
        />
        <Route
          path="/contactus"
          render={() => <Contactus menuSelected={this.menuSelected} />}
        />
        <Route path="/projects" component={Projects} />
        <Route path="/services" component={Services} />
        <Route path="/machines" component={Machines} />
        <Route path="/" component={Body} />
      </Switch>
    );
  }
}

export default MainRoute;
